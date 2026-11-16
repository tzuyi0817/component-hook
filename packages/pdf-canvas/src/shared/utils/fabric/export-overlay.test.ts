import { FabricImage, type Canvas, type FabricObject } from 'fabric';
import { renderPageCanvas } from '../pdf-js';
import { deleteFabricCanvas, exportFabricOverlay, fabricMap, renderFabricImage, specifyPage } from '.';

vi.mock('../pdf-js', () => ({ renderPageCanvas: vi.fn() }));

const CANVAS_ID = 'export-overlay';
const PAGE = { width: 400, height: 800 };

interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface FakeCanvasOptions {
  objects?: FabricObject[];
  active?: FabricObject;
  blob?: Blob | null;
}

function createFabric(rect: Rect, props: Record<string, unknown> = {}) {
  return { getBoundingRect: () => rect, ...props } as unknown as FabricObject;
}

function createCanvas({ objects = [], active, blob = new Blob(['overlay']) }: FakeCanvasOptions = {}) {
  const background = { type: 'image' };
  const snapshot: { background?: unknown; selectionBackground?: unknown; rendered: FabricObject[] } = { rendered: [] };
  const canvas = {
    ...PAGE,
    backgroundImage: background as unknown,
    getObjects: () => objects,
    getActiveObject: () => active,
    renderAll: vi.fn(),
    clear: vi.fn(),
    setDimensions: vi.fn(),
    discardActiveObject: vi.fn(),
    toCanvasElement: vi.fn((_multiplier: number, options: Rect & { filter: (fabric: FabricObject) => boolean }) => {
      snapshot.background = canvas.backgroundImage;
      snapshot.selectionBackground = active?.selectionBackgroundColor;
      snapshot.rendered = objects.filter(fabric => options.filter(fabric));

      return { toBlob: (resolve: (value: Blob | null) => void) => resolve(blob) };
    }),
  };

  fabricMap.set(CANVAS_ID, canvas as unknown as Canvas);

  return { canvas, background, snapshot };
}

async function loadPdfPage() {
  vi.mocked(renderPageCanvas).mockResolvedValue({
    canvas: document.createElement('canvas'),
    pages: 1,
    units: 2,
  });

  await specifyPage({ page: 1, data: new Blob(), scale: 1.5 }, CANVAS_ID);
}

describe('exportFabricOverlay', () => {
  afterEach(() => {
    fabricMap.clear();
  });

  it('找不到畫布時回傳 null', async () => {
    await expect(exportFabricOverlay('missing')).resolves.toBeNull();
  });

  it('頁面沒有物件時回傳 null，且不產生圖片', async () => {
    const { canvas } = createCanvas();

    await expect(exportFabricOverlay(CANVAS_ID)).resolves.toBeNull();
    expect(canvas.toCanvasElement).not.toHaveBeenCalled();
  });

  it('只剩被排除的物件（刪除鈕）時回傳 null', async () => {
    const closeFabric = createFabric({ left: 10, top: 10, width: 20, height: 20 });

    createCanvas({ objects: [closeFabric] });

    await expect(exportFabricOverlay(CANVAS_ID, {}, fabric => fabric === closeFabric)).resolves.toBeNull();
  });

  it('裁切到所有物件的聯集外框，並回傳相對於頁面的 0–1 比例', async () => {
    const blob = new Blob(['overlay']);
    const { canvas } = createCanvas({
      blob,
      objects: [
        createFabric({ left: 40, top: 80, width: 60, height: 40 }),
        createFabric({ left: 200, top: 400, width: 100, height: 200 }),
      ],
    });

    const overlay = await exportFabricOverlay(CANVAS_ID);

    expect(canvas.toCanvasElement).toHaveBeenCalledWith(
      1,
      expect.objectContaining({ left: 40, top: 80, width: 260, height: 520 }),
    );
    expect(overlay).toEqual({ blob, x: 0.1, y: 0.1, width: 0.65, height: 0.65 });
  });

  it('外框向外取整到整數像素，回傳的比例與實際裁切一致', async () => {
    const { canvas } = createCanvas({
      objects: [createFabric({ left: 40.4, top: 80.6, width: 59.2, height: 39.1 })],
    });

    const overlay = await exportFabricOverlay(CANVAS_ID);

    expect(canvas.toCanvasElement).toHaveBeenCalledWith(
      1,
      expect.objectContaining({ left: 40, top: 80, width: 60, height: 40 }),
    );
    expect(overlay).toMatchObject({ x: 0.1, y: 0.1, width: 0.15, height: 0.05 });
  });

  it('超出頁面的部分裁掉，外框不超過頁面', async () => {
    const { canvas } = createCanvas({
      objects: [createFabric({ left: -50, top: 700, width: 150, height: 200 })],
    });

    const overlay = await exportFabricOverlay(CANVAS_ID);

    expect(canvas.toCanvasElement).toHaveBeenCalledWith(
      1,
      expect.objectContaining({ left: 0, top: 700, width: 100, height: 100 }),
    );
    expect(overlay).toMatchObject({ x: 0, y: 0.875, width: 0.25, height: 0.125 });
  });

  it('物件完全在頁面外時回傳 null', async () => {
    const { canvas } = createCanvas({
      objects: [createFabric({ left: 500, top: 100, width: 50, height: 50 })],
    });

    await expect(exportFabricOverlay(CANVAS_ID)).resolves.toBeNull();
    expect(canvas.toCanvasElement).not.toHaveBeenCalled();
  });

  it('multiplier 只放大輸出解析度，不影響回傳的比例', async () => {
    const { canvas } = createCanvas({
      objects: [createFabric({ left: 40, top: 80, width: 60, height: 40 })],
    });

    const overlay = await exportFabricOverlay(CANVAS_ID, { multiplier: 4 });

    expect(canvas.toCanvasElement).toHaveBeenCalledWith(4, expect.objectContaining({ width: 60, height: 40 }));
    expect(overlay).toMatchObject({ x: 0.1, y: 0.1, width: 0.15, height: 0.05 });
  });

  it('匯出期間隱藏背景，結束後還原', async () => {
    const { canvas, background, snapshot } = createCanvas({
      objects: [createFabric({ left: 40, top: 80, width: 60, height: 40 })],
    });

    await exportFabricOverlay(CANVAS_ID);

    expect(snapshot.background).toBeUndefined();
    expect(canvas.backgroundImage).toBe(background);
  });

  it('產生圖片失敗時仍還原背景與選取背景色', async () => {
    const active = createFabric(
      { left: 40, top: 80, width: 60, height: 40 },
      { selectionBackgroundColor: 'rgba(245, 245, 245, 0.8)' },
    );
    const { canvas, background } = createCanvas({ objects: [active], active });

    canvas.toCanvasElement.mockImplementation(() => {
      throw new Error('render failed');
    });

    await expect(exportFabricOverlay(CANVAS_ID)).rejects.toThrow('render failed');
    expect(canvas.backgroundImage).toBe(background);
    expect(active.selectionBackgroundColor).toBe('rgba(245, 245, 245, 0.8)');
  });

  it('被排除的物件不計入外框，也不會被畫出來', async () => {
    const signature = createFabric({ left: 40, top: 80, width: 60, height: 40 });
    const closeFabric = createFabric({ left: 30, top: 70, width: 20, height: 20 });
    const { canvas, snapshot } = createCanvas({ objects: [signature, closeFabric] });

    await exportFabricOverlay(CANVAS_ID, {}, fabric => fabric === closeFabric);

    expect(canvas.toCanvasElement).toHaveBeenCalledWith(
      1,
      expect.objectContaining({ left: 40, top: 80, width: 60, height: 40 }),
    );
    expect(snapshot.rendered).toEqual([signature]);
  });

  it('保留使用者的選取，只在匯出期間拿掉選取背景色', async () => {
    const active = createFabric(
      { left: 40, top: 80, width: 60, height: 40 },
      { selectionBackgroundColor: 'rgba(245, 245, 245, 0.8)' },
    );
    const { canvas, snapshot } = createCanvas({ objects: [active], active });

    await exportFabricOverlay(CANVAS_ID);

    expect(snapshot.selectionBackground).toBe('');
    expect(active.selectionBackgroundColor).toBe('rgba(245, 245, 245, 0.8)');
    expect(canvas.discardActiveObject).not.toHaveBeenCalled();
  });

  it('圖片編碼失敗（blob 為 null）時回傳 null', async () => {
    createCanvas({
      blob: null,
      objects: [createFabric({ left: 40, top: 80, width: 60, height: 40 })],
    });

    await expect(exportFabricOverlay(CANVAS_ID)).resolves.toBeNull();
  });

  describe('dpi', () => {
    const SIGNATURE = { left: 40, top: 80, width: 60, height: 40 };

    afterEach(() => {
      deleteFabricCanvas(CANVAS_ID);
      vi.restoreAllMocks();
    });

    it('PDF 頁面依 dpi 換算倍率，輸出解析度不受畫布大小影響', async () => {
      const { canvas } = createCanvas({ objects: [createFabric(SIGNATURE)] });

      await loadPdfPage();
      await exportFabricOverlay(CANVAS_ID, { dpi: 144 });

      expect(canvas.toCanvasElement).toHaveBeenCalledWith(expect.closeTo(2), expect.anything());
    });

    it('PDF 頁面同時給 dpi 與 multiplier 時以 dpi 為準', async () => {
      const { canvas } = createCanvas({ objects: [createFabric(SIGNATURE)] });

      await loadPdfPage();
      await exportFabricOverlay(CANVAS_ID, { dpi: 144, multiplier: 5 });

      expect(canvas.toCanvasElement).toHaveBeenCalledWith(expect.closeTo(2), expect.anything());
    });

    it('沒載入過 PDF 頁面時忽略 dpi，改用 multiplier', async () => {
      const { canvas } = createCanvas({ objects: [createFabric(SIGNATURE)] });

      await exportFabricOverlay(CANVAS_ID, { dpi: 144, multiplier: 5 });

      expect(canvas.toCanvasElement).toHaveBeenCalledWith(5, expect.anything());
    });

    it('換成圖片頁後忽略 dpi，改用 multiplier', async () => {
      const image = { scale: vi.fn(), set: vi.fn(), getScaledWidth: () => 400, getScaledHeight: () => 800 };
      const { canvas } = createCanvas({ objects: [createFabric(SIGNATURE)] });

      vi.spyOn(FabricImage, 'fromURL').mockResolvedValue(image as unknown as FabricImage);
      vi.stubGlobal('URL', { createObjectURL: () => 'blob:image', revokeObjectURL: vi.fn() });

      await loadPdfPage();
      await renderFabricImage(CANVAS_ID, { data: new Blob() });
      await exportFabricOverlay(CANVAS_ID, { dpi: 144, multiplier: 5 });

      vi.unstubAllGlobals();
      expect(canvas.toCanvasElement).toHaveBeenCalledWith(5, expect.anything());
    });

    it('刪除畫布後不保留上一份 PDF 的換算比例', async () => {
      createCanvas();
      await loadPdfPage();
      deleteFabricCanvas(CANVAS_ID);

      const { canvas } = createCanvas({ objects: [createFabric(SIGNATURE)] });

      await exportFabricOverlay(CANVAS_ID, { dpi: 144, multiplier: 5 });

      expect(canvas.toCanvasElement).toHaveBeenCalledWith(5, expect.anything());
    });
  });
});
