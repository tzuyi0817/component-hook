import { ref, toRaw } from 'vue';
import { fabric } from 'fabric';
import { printPDF, getPDFDocument } from '../utils/pdfJs';
import { createImageSrc, convertToBase64 } from '../utils/image';
import { isDesktop, CSS_UNITS } from '../utils/common';
import type { TOCoord, SpecifyPageArgs, RenderImageArgs, CreateCloseSvgArgs } from '../types/fabric';

const fabricMap = new Map<string, fabric.Canvas>();

export default function useFabric(id: string) {
  const pages = ref(1);
  let closeSvg: fabric.Object | fabric.Group | null = null;

  function createCanvas() {
    if (fabricMap.has(id)) return;
    const canvas = new fabric.Canvas(id);

    fabricMap.set(id, canvas);
    canvas.on('selection:cleared', () => deleteCloseSvg(canvas));
    return canvas;
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
      return { ...PDF, pages: pages.value };
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
      pages.value = pdfDoc.numPages;
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

    if (!image.width || !image.height) return;
    canvas.setWidth(image.width * scale);
    canvas.setHeight(image.height * scale);
    canvas.setBackgroundImage(image, canvas.renderAll.bind(canvas));
  }

  function canvasToImage(canvas: HTMLCanvasElement, scale: number) {
    return new fabric.Image(canvas, {
      scaleX: scale,
      scaleY: scale,
    });
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
    return { ...PDF, pages: pages.value };
  }

  function renderImage({ url, scale = isDesktop() ? 0.5 : 0.3 }: RenderImageArgs) {
    const canvas = fabricMap.get(id);
    if (!canvas) return;
    fabric.Image.fromURL(url, image => {
      image.scale(scale);
      canvas.setWidth(image.width! * scale);
      canvas.setHeight(image.height! * scale);
      canvas.setBackgroundImage(image, canvas.renderAll.bind(canvas));
    });
  }

  function addFabric(src: string, position = { x: 100, y: 50 }) {
    const canvas = fabricMap.get(id);
    if (!canvas) return;
    fabric.Image.fromURL(src, image => {
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
    });
  }

  function addTextFabric(text: string, position = { x: 100, y: 50 }) {
    const canvas = fabricMap.get(id);
    if (!canvas) return;
    const textFabric = new fabric.Text(text, {
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

  function setFabric(canvas: fabric.Canvas, fab: fabric.Image | fabric.Text) {
    fab.on('selected', event => createCloseSvg({ canvas, event, fab }));
    fab.on('modified', event => moveCloseSvg(event));
    fab.on('scaling', event => moveCloseSvg(event));
    fab.on('moving', event => moveCloseSvg(event));
    fab.on('rotating', event => moveCloseSvg(event));
  }

  async function createCloseSvg({ canvas, event, fab, stroke = '#000', uuid = Date.now() }: CreateCloseSvgArgs) {
    if (closeSvg?.stroke === `${stroke}-${uuid}`) return;
    const src = createImageSrc('icon/ic_close_s.svg');

    fabric.loadSVGFromURL(src, (objects, options) => {
      const svg = fabric.util.groupSVGElements(objects, options);

      objects.forEach(object => {
        object.stroke = stroke;
      });
      svg.hoverCursor = 'pointer';
      svg.stroke = `${stroke}-${uuid}`;
      deleteCloseSvg(canvas);
      closeSvg = svg;
      onCloseSvg(canvas, fab, event, uuid);
      moveCloseSvg(event);
      canvas.add(svg);
    });
  }

  function onCloseSvg(
    canvas: fabric.Canvas,
    fab: fabric.Image | fabric.Text,
    event: fabric.IEvent<Event>,
    uuid: number,
  ) {
    closeSvg?.on('selected', () => {
      canvas.remove(fab);
      deleteCloseSvg(canvas);
    });
    closeSvg?.on('mouseover', () => {
      createCloseSvg({ canvas, event, fab, stroke: '#B7EC5D', uuid });
    });
    closeSvg?.on('mouseout', () => {
      createCloseSvg({ canvas, event, fab, stroke: '#000', uuid });
    });
  }

  function moveCloseSvg(event: fabric.IEvent<Event>) {
    const target = event.transform?.target ?? event.target;

    if (!closeSvg || !target) return;
    const { oCoords, cornerSize = 1 } = target;
    if (!oCoords) return;
    const { x, y } = (oCoords.tl as TOCoord).touchCorner.tl;

    closeSvg.top = y - cornerSize * 3;
    closeSvg.left = x - cornerSize * 3;
    closeSvg.setCoords();
  }

  function deleteCloseSvg(canvas: fabric.Canvas) {
    if (!closeSvg) return;
    canvas.remove(closeSvg);
    closeSvg = null;
  }

  function clearActive() {
    const canvas = fabricMap.get(id);
    if (!canvas) return;
    canvas.discardActiveObject().renderAll();
  }

  function deleteCanvas() {
    const canvas = fabricMap.get(id);
    if (!canvas) return;
    canvas.clear();
    fabricMap.delete(id);
  }

  return {
    createCanvas,
    drawPDF,
    drawImage,
    specifyPage,
    renderImage,
    addFabric,
    addTextFabric,
    clearActive,
    deleteCanvas,
    pages,
  };
}
