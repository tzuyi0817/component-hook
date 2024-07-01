import { toRaw } from 'vue';
import { Canvas, FabricImage, FabricText, loadSVGFromURL, util, type FabricObject } from 'fabric';
import { printPDF, getPDFDocument } from '../utils/pdfJs';
import { createImageSrc, convertToBase64 } from '../utils/image';
import { isDesktop, CSS_UNITS } from '../utils/common';
import type {
  SelectedEvent,
  SpecifyPageArgs,
  RenderImageArgs,
  CreateCloseSvgArgs,
  SupportFileType,
} from '../types/fabric';

const fabricMap = new Map<string, Canvas>();

export default function useFabric(id = '') {
  let pages = 0;
  let closeSvg: FabricObject | null = null;

  function createCanvas() {
    if (!id || fabricMap.has(id)) return;
    const canvas = new Canvas(id);

    fabricMap.set(id, canvas);
    canvas.on('selection:cleared', () => deleteCloseSvg(canvas));
    return canvas;
  }

  function loadFile(file: File) {
    const fileType = file.type as SupportFileType;
    const loadFileMap = {
      'application/pdf': drawPDF,
      'image/png': drawImage,
      'image/jpeg': drawImage,
    };

    return loadFileMap[fileType](file) ?? Promise.reject(new Error(`Unsupported ${fileType} file type.`));
  }

  async function drawPDF(file: File) {
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
      await specifyPage({ page: 1, PDFBase64, scale: 0.8 });
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

  async function addFabric(src: string, position = { x: 100, y: 50 }) {
    const canvas = fabricMap.get(id);

    if (!canvas) return;
    const image = await FabricImage.fromURL(src);

    image.top = position.y;
    image.left = position.x;
    image.scaleX = 0.5;
    image.scaleY = 0.5;
    image.borderColor = 'black';
    image.cornerStrokeColor = 'black';
    image.cornerSize = 8;
    image.selectionBackgroundColor = 'rgba(245, 245, 245, 0.8)';
    canvas.add(image);
    setFabric(canvas, image);
  }

  function addTextFabric(text: string, position = { x: 100, y: 50 }) {
    const canvas = fabricMap.get(id);

    if (!canvas) return;
    const textFabric = new FabricText(text, {
      top: position.y,
      left: position.x,
      fontFamily: 'helvetica',
      borderColor: 'black',
      cornerStrokeColor: 'black',
      scaleX: 0.7,
      scaleY: 0.7,
      cornerSize: 8,
      selectionBackgroundColor: 'rgba(245, 245, 245, 0.8)',
    });

    canvas.add(textFabric);
    setFabric(canvas, textFabric);
  }

  function setFabric(canvas: Canvas, fabric: FabricImage | FabricText) {
    fabric.on('selected', event => createCloseSvg({ canvas, event, fabric }));
    fabric.on('modified', event => moveCloseSvg(event.target));
    fabric.on('scaling', event => moveCloseSvg(event.transform.target));
    fabric.on('moving', event => moveCloseSvg(event.transform.target));
    fabric.on('rotating', event => moveCloseSvg(event.transform.target));
  }

  async function createCloseSvg({ canvas, event, fabric, stroke = '#000', uuid = Date.now() }: CreateCloseSvgArgs) {
    if (closeSvg?.stroke === `${stroke}-${uuid}`) return;

    const src = createImageSrc('icon/ic_close_s.svg');
    const { objects, options } = await loadSVGFromURL(src);
    const filterObjects = objects.filter((object): object is NonNullable<typeof object> => object !== null);
    const group = util.groupSVGElements(filterObjects, options);

    filterObjects.forEach(object => {
      object.stroke = stroke;
    });
    group.hoverCursor = 'pointer';
    group.stroke = `${stroke}-${uuid}`;
    deleteCloseSvg(canvas);
    closeSvg = group;
    onCloseSvg(canvas, fabric, event, uuid);
    moveCloseSvg(event.target);
    canvas.add(group);
  }

  function onCloseSvg(canvas: Canvas, fabric: FabricImage | FabricText, event: SelectedEvent, uuid: number) {
    if (!closeSvg) return;

    closeSvg.on('selected', () => {
      canvas.remove(fabric);
      deleteCloseSvg(canvas);
    });
    closeSvg.on('mouseover', () => {
      createCloseSvg({ canvas, event, fabric, stroke: '#B7EC5D', uuid });
    });
    closeSvg.on('mouseout', () => {
      createCloseSvg({ canvas, event, fabric, stroke: '#000', uuid });
    });
  }

  function moveCloseSvg(target: FabricObject) {
    if (!closeSvg) return;
    const { oCoords, cornerSize = 1 } = target;

    if (!oCoords) return;
    const { x, y } = oCoords.tl.touchCorner.tl;

    closeSvg.top = y - cornerSize * 3;
    closeSvg.left = x - cornerSize * 3;
    closeSvg.setCoords();
  }

  function deleteCloseSvg(canvas: Canvas) {
    if (!closeSvg) return;
    canvas.remove(closeSvg);
    closeSvg = null;
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
  };
}
