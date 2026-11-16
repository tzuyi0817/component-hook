import {
  Canvas,
  FabricImage,
  Group,
  loadSVGFromURL,
  util,
  type BaseFabricObject,
  type FabricObject,
  type FabricObjectProps,
  type TOptions,
} from 'fabric';
import { CLONE_PROPERTIES } from '../../constants';
import { renderPageCanvas } from '../pdf-js';
import type {
  CacheFabricImage,
  CacheFabricObject,
  CacheFabricText,
  CloseSvgOptions,
  DropOffset,
  ExportOverlayOptions,
  FabricOverlay,
  RenderImageArgs,
  SpecifyPageArgs,
  SupportFileType,
} from '../../types/fabric';

const POINTS_PER_INCH = 72;
const PAGE_IMAGE_SCALE = 1 / 3;

export const fabricMap = new Map<string, Canvas>();

const pixelsPerPointMap = new Map<string, number>();

export function createFabricCanvas(id: string) {
  const canvas = new Canvas(id);

  fabricMap.set(id, canvas);
  return canvas;
}

export function createPdfInfo(file: File) {
  const now = Date.now();
  const PDFId = `${file.name}-${now}`;

  return {
    PDFId,
    name: file.name.replace(/.pdf/, ''),
    updateDate: now,
    data: file,
  };
}

export async function generateCloseFabric({ src }: CloseSvgOptions, uuid: number, stroke?: string) {
  if (!src || !stroke) return null;
  const { objects, options } = await loadSVGFromURL(src);
  const filterObjects = objects.filter((object): object is NonNullable<typeof object> => object !== null);
  const group = util.groupSVGElements(filterObjects, options);

  for (const object of filterObjects) {
    object.stroke = stroke;
  }
  group.hoverCursor = 'pointer';
  group.stroke = `${stroke}-${uuid}`;

  return group;
}

export function renderFabricCanvas(id: string, canvasTemp: HTMLCanvasElement) {
  const canvas = fabricMap.get(id);

  if (!canvas) return;

  const image = canvasToImage(canvasTemp, PAGE_IMAGE_SCALE);

  setFabricCanvas(id, image);
}

export async function drawFabricImage(file: File, id?: string) {
  const now = Date.now();
  const PDFId = `${file.name}-${now}`;
  const PDF = {
    PDFId,
    name: file.name.replace(/.png|.jpg|.jpeg/, ''),
    updateDate: now,
    data: file,
  };

  if (id) {
    renderFabricImage(id, { data: file });
  }

  return { ...PDF, pages: 1 };
}

export async function renderFabricImage(id: string, { data, scale = 0.5 }: RenderImageArgs) {
  const canvas = fabricMap.get(id);

  if (!canvas) return;

  const url = URL.createObjectURL(data);
  const image = await FabricImage.fromURL(url);

  image.scale(scale);
  setFabricCanvas(id, image);
  pixelsPerPointMap.delete(id);
  URL.revokeObjectURL(url);
}

function setFabricCanvas(id: string, image: FabricImage) {
  const canvas = fabricMap.get(id);

  if (!canvas) return;

  canvas.setDimensions({
    width: image.getScaledWidth(),
    height: image.getScaledHeight(),
  });

  image.set({
    originX: 'left',
    originY: 'top',
    left: 0,
    top: 0,
  });

  canvas.backgroundImage = image;
  canvas.renderAll();
}

export function moveCloseFabric(target: FabricObject, closeFabric: FabricObject | null) {
  if (!closeFabric) return;
  const { oCoords } = target;

  if (!oCoords) return;
  const { x, y } = oCoords.tl.touchCorner.tl;
  const { height, width, scaleY, scaleX } = closeFabric;

  closeFabric.top = y - (height * scaleY) / 2;
  closeFabric.left = x - (width * scaleX) / 2;
  closeFabric.setCoords();
}

export function scaleCloseFabric(fabric: FabricObject | null, scale: number, closeFabric: FabricObject | null) {
  if (!closeFabric || !fabric) return;

  closeFabric.scale(1 / scale);
  moveCloseFabric(fabric, closeFabric);
}

export function scaleCornerFabric(fabric: CacheFabricObject | null, scale: number) {
  if (!fabric) return;
  const cornerSize = fabric._cornerSize || 6;

  fabric.borderScaleFactor = 1 / scale;
  fabric.cornerSize = cornerSize * (1 / scale);
  fabric.touchCornerSize = cornerSize * 4 * (1 / scale);
  fabric.setCoords();
}

export function clearActiveCanvas(id: string) {
  const canvas = fabricMap.get(id);

  if (!canvas) return;
  canvas.discardActiveObject();
  canvas.renderAll();
}

export function deleteFabricCanvas(id: string) {
  const canvas = fabricMap.get(id);

  if (!canvas) return;

  canvas.clear();
  fabricMap.delete(id);
  pixelsPerPointMap.delete(id);
}

function canvasToImage(canvas: HTMLCanvasElement, scale: number) {
  return new FabricImage(canvas, { scaleX: scale, scaleY: scale });
}

export function setFabricOffset(fabric: FabricObject, offset?: DropOffset) {
  if (!offset) return;

  const { left, top } = fabric;
  const offsetX = offset.x * fabric.getScaledWidth();
  const offsetY = offset.y * fabric.getScaledHeight();

  fabric.set({ left: left - offsetX, top: top - offsetY, originX: 'left', originY: 'top' });
}

export function loadFile(file: File, password?: string, id?: string) {
  const fileType = file.type as SupportFileType;
  const loadFileMap = {
    'application/pdf': drawPDF,
    'image/png': drawImage,
    'image/jpeg': drawImage,
  };

  return loadFileMap[fileType]?.(file, password, id) ?? Promise.reject(new Error(`Unsupported ${fileType} file type.`));
}

async function drawPDF(file: File, password?: string, id?: string) {
  const PDF = createPdfInfo(file);
  const pages = await specifyPage({ page: 1, data: file, scale: 0.8, password }, id);

  return { ...PDF, pages };
}

export async function specifyPage(options: SpecifyPageArgs, id?: string) {
  const { canvas, pages, units } = await renderPageCanvas(options, id);

  if (canvas && id) {
    renderFabricCanvas(id, canvas);
    pixelsPerPointMap.set(id, options.scale * units * PAGE_IMAGE_SCALE);
  }

  return pages;
}

async function drawImage(file: File, _?: string, id?: string) {
  return await drawFabricImage(file, id);
}

export function setActiveFabric(id: string, options: TOptions<FabricObjectProps>) {
  const canvas = fabricMap.get(id);

  if (!canvas) return;

  const active = canvas.getActiveObject();

  if (!active) return;

  if (active instanceof Group) {
    active.forEachObject(fabric => {
      fabric.set(options);
    });
  } else {
    active.set(options);
  }

  canvas.renderAll();
}

export async function copyActiveFabric(
  id: string,
  setFabric: (canvas: Canvas, fabric: CacheFabricImage | CacheFabricText | CacheFabricObject) => void,
) {
  const canvas = fabricMap.get(id);

  if (!canvas) return;
  const active = canvas?.getActiveObject();

  if (!active) return;
  const clone = await active.clone(CLONE_PROPERTIES);

  if (clone instanceof Group) {
    clone.forEachObject(fabric => {
      canvas.add(fabric);
      setFabric(canvas, fabric);
    });
  } else {
    canvas.add(clone);
    setFabric(canvas, clone);
  }

  setFabricOffset(clone, { x: -0.1, y: -0.1 });
  canvas.setActiveObject(clone);
}

export function deleteActiveFabric(id: string) {
  const canvas = fabricMap.get(id);

  if (!canvas) return;
  const active = canvas.getActiveObject();

  if (!active) return;
  if (active instanceof Group) {
    active.forEachObject(fabric => {
      canvas.remove(fabric);
    });

    canvas.discardActiveObject();
  } else {
    canvas.remove(active);
  }
}

export async function exportFabricOverlay(
  id: string,
  options: ExportOverlayOptions = {},
  isExcluded: (fabric: BaseFabricObject) => boolean = () => false,
): Promise<FabricOverlay | null> {
  const canvas = fabricMap.get(id);

  if (!canvas) return null;

  const isIncluded = (fabric: BaseFabricObject) => !isExcluded(fabric);
  const rects = canvas
    .getObjects()
    .filter(fabric => isIncluded(fabric))
    .map(fabric => fabric.getBoundingRect());

  if (!rects.length) return null;

  const { width: pageWidth, height: pageHeight } = canvas;
  const left = Math.max(0, Math.floor(Math.min(...rects.map(rect => rect.left))));
  const top = Math.max(0, Math.floor(Math.min(...rects.map(rect => rect.top))));
  const right = Math.min(pageWidth, Math.ceil(Math.max(...rects.map(rect => rect.left + rect.width))));
  const bottom = Math.min(pageHeight, Math.ceil(Math.max(...rects.map(rect => rect.top + rect.height))));
  const width = right - left;
  const height = bottom - top;

  if (width <= 0 || height <= 0) return null;

  const multiplier = resolveOverlayMultiplier(id, options);
  const element = renderOverlayElement(canvas, multiplier, { left, top, width, height, filter: isIncluded });
  const blob = await new Promise<Blob | null>(resolve => element.toBlob(resolve, 'image/png'));

  if (!blob) return null;

  return {
    blob,
    x: left / pageWidth,
    y: top / pageHeight,
    width: width / pageWidth,
    height: height / pageHeight,
  };
}

function resolveOverlayMultiplier(id: string, { multiplier = 1, dpi }: ExportOverlayOptions) {
  const pixelsPerPoint = pixelsPerPointMap.get(id);

  if (!dpi || !pixelsPerPoint) return multiplier;

  return dpi / POINTS_PER_INCH / pixelsPerPoint;
}

function renderOverlayElement(
  canvas: Canvas,
  multiplier: number,
  options: NonNullable<Parameters<Canvas['toCanvasElement']>[1]>,
) {
  const active = canvas.getActiveObject();
  const background = canvas.backgroundImage;
  const selectionBackgroundColor = active?.selectionBackgroundColor;

  canvas.backgroundImage = undefined;

  if (active) {
    active.selectionBackgroundColor = '';
  }

  try {
    return canvas.toCanvasElement(multiplier, options);
  } finally {
    canvas.backgroundImage = background;

    if (active && selectionBackgroundColor !== undefined) {
      active.selectionBackgroundColor = selectionBackgroundColor;
    }
  }
}
