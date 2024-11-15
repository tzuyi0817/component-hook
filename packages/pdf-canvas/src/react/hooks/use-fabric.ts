import {
  Canvas,
  FabricImage,
  FabricText,
  loadSVGFromURL,
  util,
  type FabricObject,
  type TOptions,
  type ImageProps,
  type TextProps,
} from 'fabric';
import { printPDF, getPDFDocument } from '../../shared/utils/pdf-js';
import { createImageSrc, convertToBase64 } from '../../shared/utils/image';
import { getPixelsPerPoint } from '../../shared/utils/common';
import { DEFAULT_IMAGE_OPTIONS, DEFAULT_TEXT_OPTIONS, DEFAULT_CLOSE_OPTIONS } from '../../shared/configs';
import type {
  SpecifyPageArgs,
  RenderImageArgs,
  CreateCloseFabricArgs,
  SupportFileType,
  CloseSvgOptions,
} from '../../shared/types/fabric';

const fabricMap = new Map<string, Canvas>();

export function useFabric(id = '') {
  let pages = 0;
  let closeFabric: FabricObject | null = null;
  let selectedFabric: FabricObject | null = null;
  let canvasScale = 1;
  let closeOptions: CloseSvgOptions = { ...DEFAULT_CLOSE_OPTIONS };

  function createCanvas() {
    if (!id || fabricMap.has(id)) return;
    const canvas = new Canvas(id);

    fabricMap.set(id, canvas);
    canvas.on('selection:cleared', () => deleteCloseFabric(canvas));
    return canvas;
  }

  function loadFile(file: File, password?: string) {
    const fileType = file.type as SupportFileType;
    const loadFileMap = {
      'application/pdf': drawPDF,
      'image/png': drawImage,
      'image/jpeg': drawImage,
    };

    return loadFileMap[fileType](file, password) ?? Promise.reject(new Error(`Unsupported ${fileType} file type.`));
  }

  async function drawPDF(file: File, password?: string) {
    const PDFBase64 = await printPDF(file);

    if (!PDFBase64) return;
    const now = Date.now();
    const PDFId = `${file.name}-${now}`;
    const PDF = {
      PDFId,
      name: file.name.replace(/.pdf/, ''),
      updateDate: now,
      PDFBase64,
    };

    try {
      await specifyPage({ page: 1, PDFBase64, scale: 0.8, password });
      return { ...PDF, pages };
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function specifyPage({ page, PDFBase64, scale, password }: SpecifyPageArgs) {
    try {
      const pdfDoc = await getPDFDocument(PDFBase64, password);
      const pdfPage = await pdfDoc.getPage(page);
      const viewport = pdfPage.getViewport({ scale });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d')!;
      const CSS_UNITS = getPixelsPerPoint() / window.devicePixelRatio;

      canvas.width = Math.floor(viewport.width * CSS_UNITS);
      canvas.height = Math.floor(viewport.height * CSS_UNITS);
      pages = pdfDoc.numPages;

      const renderContext = {
        canvasContext: context,
        viewport,
        transform: [CSS_UNITS, 0, 0, CSS_UNITS, 0, 0],
      };
      const renderTask = pdfPage.render(renderContext);

      return renderTask.promise.then(() => renderCanvas(canvas));
    } catch (error) {
      return Promise.reject(error);
    }
  }

  function renderCanvas(canvasTemp: HTMLCanvasElement) {
    const canvas = fabricMap.get(id);

    if (!canvas) return;
    const scale = 1 / 3;
    const image = canvasToImage(canvasTemp, scale);

    setCanvas(image, scale);
  }

  async function drawImage(file: File) {
    const base64 = await convertToBase64(file);
    const now = Date.now();
    const PDFId = `${file.name}${now}`;
    const PDF = {
      PDFId,
      name: file.name.replace(/.png|.jpg|.jpeg/, ''),
      updateDate: now,
      PDFBase64: base64,
    };

    renderImage({ url: base64 });
    return { ...PDF, pages: 1 };
  }

  async function renderImage({ url, scale = 0.5 }: RenderImageArgs) {
    const canvas = fabricMap.get(id);

    if (!canvas) return;
    const image = await FabricImage.fromURL(url);

    image.scale(scale);
    setCanvas(image, scale);
  }

  function setCanvas(image: FabricImage, scale: number) {
    const canvas = fabricMap.get(id);

    if (!canvas) return;
    canvas.setWidth(image.width * scale);
    canvas.setHeight(image.height * scale);
    canvas.backgroundImage = image;
    canvas.renderAll();
  }

  async function addFabric(src: string, options?: TOptions<ImageProps>) {
    const canvas = fabricMap.get(id);

    if (!canvas) return;
    const image = await FabricImage.fromURL(src, {}, { ...DEFAULT_IMAGE_OPTIONS, ...options });

    canvas.add(image);
    setFabric(canvas, image);
  }

  function addTextFabric(text: string, options?: TOptions<TextProps>) {
    const canvas = fabricMap.get(id);

    if (!canvas) return;
    const textFabric = new FabricText(text, {
      ...DEFAULT_TEXT_OPTIONS,
      ...options,
    });

    canvas.add(textFabric);
    setFabric(canvas, textFabric);
  }

  function setFabric(canvas: Canvas, fabric: FabricImage | FabricText) {
    fabric.on('selected', event => createCloseFabric({ canvas, target: event.target }));
    fabric.on('modified', event => moveCloseFabric(event.target));
    fabric.on('scaling', event => moveCloseFabric(event.transform.target));
    fabric.on('moving', event => moveCloseFabric(event.transform.target));
    fabric.on('rotating', event => moveCloseFabric(event.transform.target));
  }

  async function createCloseFabric({
    canvas,
    target,
    stroke = closeOptions.stroke,
    uuid = Date.now(),
  }: CreateCloseFabricArgs) {
    if (closeFabric?.stroke === `${stroke}-${uuid}`) return;

    const src = closeOptions.src || createImageSrc('close.svg');
    const { objects, options } = await loadSVGFromURL(src);
    const filterObjects = objects.filter((object): object is NonNullable<typeof object> => object !== null);
    const group = util.groupSVGElements(filterObjects, options);

    filterObjects.forEach(object => {
      object.stroke = stroke;
    });
    group.hoverCursor = 'pointer';
    group.stroke = `${stroke}-${uuid}`;
    deleteCloseFabric(canvas);
    closeFabric = group;
    selectedFabric = target;
    onCloseFabric(canvas, target, uuid);
    scaleFabric(canvasScale, true);
    canvas.add(group);
  }

  function onCloseFabric(canvas: Canvas, target: FabricObject, uuid: number) {
    if (!closeFabric) return;

    closeFabric.on('selected', () => {
      canvas.remove(target);
      deleteCloseFabric(canvas);
    });
    closeFabric.on('mouseover', () => {
      createCloseFabric({
        canvas,
        target,
        stroke: closeOptions.hoverStroke,
        uuid,
      });
    });
    closeFabric.on('mouseout', () => {
      createCloseFabric({ canvas, target, stroke: closeOptions.stroke, uuid });
    });
  }

  function moveCloseFabric(target: FabricObject) {
    if (!closeFabric) return;
    const { oCoords } = target;

    if (!oCoords) return;
    const { x, y } = oCoords.tl.touchCorner.tl;
    const { height, width, scaleY, scaleX } = closeFabric;

    closeFabric.top = y - (height * scaleY) / 2;
    closeFabric.left = x - (width * scaleX) / 2;
    closeFabric.setCoords();
  }

  function scaleFabric(scale: number, isCreate = false) {
    const canvas = fabricMap.get(id);

    canvasScale = scale;
    if (!canvas) return;
    scaleCornerFabric(selectedFabric, scale);
    scaleCloseFabric(selectedFabric, scale);
    if (isCreate) return;

    canvas.renderAll();
  }

  function scaleCloseFabric(fabric: FabricObject | null, scale: number) {
    if (!closeFabric || !fabric) return;
    closeFabric.scale(1 / scale);
    moveCloseFabric(fabric);
  }

  function scaleCornerFabric(fabric: FabricObject | null, scale: number) {
    if (!fabric) return;
    fabric.borderScaleFactor = 1 / scale;
    fabric.cornerSize = 6 * (1 / scale);
    fabric.touchCornerSize = 24 * (1 / scale);
    fabric.cornerStrokeColor = closeOptions.stroke;
    fabric.setCoords();
  }

  function setCloseSvgOptions(options?: CloseSvgOptions) {
    if (!options) return;
    closeOptions = { ...closeOptions, ...options };

    const canvas = fabricMap.get(id);

    if (!closeFabric || !selectedFabric || !canvas) return;
    createCloseFabric({ target: selectedFabric, canvas });
  }

  function deleteCloseFabric(canvas: Canvas) {
    if (!closeFabric) return;
    canvas.remove(closeFabric);
    closeFabric = selectedFabric = null;
  }

  function clearActive() {
    const canvas = fabricMap.get(id);

    if (!canvas) return;
    canvas.discardActiveObject();
    canvas.renderAll();
  }

  function deleteCanvas() {
    const canvas = fabricMap.get(id);

    if (!canvas) return;
    canvas.clear();
    fabricMap.delete(id);
  }

  return {
    createCanvas,
    loadFile,
    specifyPage,
    renderImage,
    addFabric,
    addTextFabric,
    clearActive,
    deleteCanvas,
    scaleFabric,
    setCloseSvgOptions,
  };
}

function canvasToImage(canvas: HTMLCanvasElement, scale: number) {
  return new FabricImage(canvas, { scaleX: scale, scaleY: scale });
}
