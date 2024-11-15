import { Canvas, FabricImage, loadSVGFromURL, util, type FabricObject } from 'fabric';
import { type PDFPageProxy } from 'pdfjs-dist';
import type { RenderImageArgs, CloseSvgOptions } from '../types/fabric';
import { convertToBase64, createImageSrc } from './image';
import { getPixelsPerPoint } from './common';

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

export async function generateCloseFabric(closeSrc: string, stroke: string, uuid: number) {
  const src = closeSrc || createImageSrc('close.svg');
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

export function scaleCornerFabric(fabric: FabricObject | null, scale: number, closeOptions: CloseSvgOptions) {
  if (!fabric) return;

  fabric.borderScaleFactor = 1 / scale;
  fabric.cornerSize = 6 * (1 / scale);
  fabric.touchCornerSize = 24 * (1 / scale);
  fabric.cornerStrokeColor = closeOptions.stroke;
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
