import { toRaw } from 'vue';
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
import { printPDF, getPDFDocument } from '../utils/pdfJs';
import { createImageSrc, convertToBase64 } from '../utils/image';
import { isDesktop, CSS_UNITS } from '../utils/common';
import { DEFAULT_IMAGE_OPTIONS, DEFAULT_TEXT_OPTIONS } from '../configs';
import type {
  SelectedEvent,
  SpecifyPageArgs,
  RenderImageArgs,
  CreateCloseFabricArgs,
  SupportFileType,
} from '../types/fabric';

const fabricMap = new Map<string, Canvas>();

export default function useFabric(id = '') {
  let pages = 0;
  let closeFabric: FabricObject | null = null;
  let closeFabricScale = 1;

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
      const pdfPage = await toRaw(pdfDoc).getPage(page);
      const viewport = pdfPage.getViewport({ scale });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d')!;

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

  function canvasToImage(canvas: HTMLCanvasElement, scale: number) {
    return new FabricImage(canvas, { scaleX: scale, scaleY: scale });
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

  async function renderImage({ url, scale = isDesktop() ? 0.5 : 0.3 }: RenderImageArgs) {
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
    fabric.on('selected', event => createCloseFabric({ canvas, event, fabric }));
    fabric.on('modified', event => moveCloseFabric(event.target));
    fabric.on('scaling', event => moveCloseFabric(event.transform.target));
    fabric.on('moving', event => moveCloseFabric(event.transform.target));
    fabric.on('rotating', event => moveCloseFabric(event.transform.target));
  }

  async function createCloseFabric({
    canvas,
    event,
    fabric,
    stroke = '#000',
    uuid = Date.now(),
  }: CreateCloseFabricArgs) {
    if (closeFabric?.stroke === `${stroke}-${uuid}`) return;

    const src = createImageSrc('close.svg');
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
    onCloseFabric(canvas, fabric, event, uuid);
    scaleCloseFabric(closeFabricScale);
    moveCloseFabric(event.target);
    canvas.add(group);
  }

  function onCloseFabric(canvas: Canvas, fabric: FabricImage | FabricText, event: SelectedEvent, uuid: number) {
    if (!closeFabric) return;

    closeFabric.on('selected', () => {
      canvas.remove(fabric);
      deleteCloseFabric(canvas);
    });
    closeFabric.on('mouseover', () => {
      createCloseFabric({ canvas, event, fabric, stroke: '#B7EC5D', uuid });
    });
    closeFabric.on('mouseout', () => {
      createCloseFabric({ canvas, event, fabric, stroke: '#000', uuid });
    });
  }

  function moveCloseFabric(target: FabricObject) {
    if (!closeFabric) return;
    const { oCoords } = target;

    if (!oCoords) return;
    const { x, y } = oCoords.tl.touchCorner.tl;
    const { height, width } = closeFabric;

    closeFabric.top = y - height / 2;
    closeFabric.left = x - width / 2;
    closeFabric.setCoords();
  }

  function scaleCloseFabric(scale: number) {
    closeFabricScale = scale;
    if (!closeFabric) return;
    closeFabric.scale(1 / scale);
    closeFabric.setCoords();
  }

  function deleteCloseFabric(canvas: Canvas) {
    if (!closeFabric) return;
    canvas.remove(closeFabric);
    closeFabric = null;
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
    scaleCloseFabric,
  };
}
