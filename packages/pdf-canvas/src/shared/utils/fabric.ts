import { Canvas, FabricImage, Group, loadSVGFromURL, util, type FabricObject } from 'fabric';
import { CLONE_PROPERTIES } from '../constants';
import type {
  CacheFabricImage,
  CacheFabricObject,
  CacheFabricText,
  CloseSvgOptions,
  DropOffset,
  RenderImageArgs,
  SpecifyPageArgs,
  SupportFileType,
} from '../types/fabric';
import { getPixelsPerPoint } from './common';
import { convertToBase64 } from './image';
import { getPDFDocument, printPDF } from './pdf-js';
import type { PDFPageProxy } from 'pdfjs-dist';

export const fabricMap = new Map<string, Canvas>();

export function createFabricCanvas(id: string) {
  const canvas = new Canvas(id);

  fabricMap.set(id, canvas);
  return canvas;
}

export function createPdfInfo(file: File, PDFBase64: string) {
  const now = Date.now();
  const PDFId = `${file.name}-${now}`;

  return {
    PDFId,
    name: file.name.replace(/.pdf/, ''),
    updateDate: now,
    PDFBase64,
  };
}

export function createRenderTask(pdfPage: PDFPageProxy, scale: number) {
  const viewport = pdfPage.getViewport({ scale });
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d')!;
  const CSS_UNITS = getPixelsPerPoint() / window.devicePixelRatio;

  canvas.width = Math.floor(viewport.width * CSS_UNITS);
  canvas.height = Math.floor(viewport.height * CSS_UNITS);

  const renderContext = {
    canvasContext: context,
    viewport,
    transform: [CSS_UNITS, 0, 0, CSS_UNITS, 0, 0],
  };
  const renderTask = pdfPage.render(renderContext);

  return { canvas, renderTask };
}

export async function generateCloseFabric({ src }: CloseSvgOptions, uuid: number, stroke?: string) {
  if (!src || !stroke) return null;
  const { objects, options } = await loadSVGFromURL(src);
  const filterObjects = objects.filter((object): object is NonNullable<typeof object> => object !== null);
  const group = util.groupSVGElements(filterObjects, options);

  filterObjects.forEach(object => {
    object.stroke = stroke;
  });
  group.hoverCursor = 'pointer';
  group.stroke = `${stroke}-${uuid}`;

  return group;
}

export function renderFabricCanvas(id: string, canvasTemp: HTMLCanvasElement) {
  const canvas = fabricMap.get(id);

  if (!canvas) return;
  const scale = 1 / 3;
  const image = canvasToImage(canvasTemp, scale);

  setFabricCanvas(id, image, scale);
}

export async function drawFabricImage(id: string, file: File) {
  const base64 = await convertToBase64(file);
  const now = Date.now();
  const PDFId = `${file.name}${now}`;
  const PDF = {
    PDFId,
    name: file.name.replace(/.png|.jpg|.jpeg/, ''),
    updateDate: now,
    PDFBase64: base64,
  };

  renderFabricImage(id, { url: base64 });
  return { ...PDF, pages: 1 };
}

export async function renderFabricImage(id: string, { url, scale = 0.5 }: RenderImageArgs) {
  const canvas = fabricMap.get(id);

  if (!canvas) return;
  const image = await FabricImage.fromURL(url);

  image.scale(scale);
  setFabricCanvas(id, image, scale);
}

function setFabricCanvas(id: string, image: FabricImage, scale: number) {
  const canvas = fabricMap.get(id);

  if (!canvas) return;
  canvas.setWidth(image.width * scale);
  canvas.setHeight(image.height * scale);
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
}

function canvasToImage(canvas: HTMLCanvasElement, scale: number) {
  return new FabricImage(canvas, { scaleX: scale, scaleY: scale });
}

export function setFabricOffset(fabric: FabricObject, offset?: DropOffset) {
  if (!offset) return;
  const { left, top, scaleX, scaleY, width, height } = fabric;
  const offsetX = offset.x * width * scaleX;
  const offsetY = offset.y * height * scaleY;

  fabric.set({ left: left - offsetX, top: top - offsetY });
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
  const PDFBase64 = await printPDF(file);

  if (!PDFBase64) return;
  const PDF = createPdfInfo(file, PDFBase64);

  try {
    const pages = await specifyPage({ page: 1, PDFBase64, scale: 0.8, password }, id);

    return { ...PDF, pages };
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function specifyPage({ page, PDFBase64, scale, password }: SpecifyPageArgs, id?: string) {
  try {
    const pdfDoc = await getPDFDocument(PDFBase64, password);
    const pdfPage = await pdfDoc.getPage(page);
    const { renderTask, canvas } = createRenderTask(pdfPage, scale);

    return renderTask.promise.then(() => {
      if (id) {
        renderFabricCanvas(id, canvas);
      }

      return pdfDoc.numPages;
    });
  } catch (error) {
    return Promise.reject(error);
  }
}

async function drawImage(file: File, _?: string, id?: string) {
  if (!id) return;

  return await drawFabricImage(id, file);
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
