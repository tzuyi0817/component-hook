import { useRef } from 'react';
import {
  Canvas,
  FabricImage,
  FabricText,
  type FabricObject,
  type TOptions,
  type ImageProps,
  type TextProps,
} from 'fabric';
import {
  fabricMap,
  createFabricCanvas,
  createPdfInfo,
  createRenderTask,
  generateCloseFabric,
  renderFabricCanvas,
  drawFabricImage,
  renderFabricImage,
  moveCloseFabric,
  scaleCloseFabric,
  scaleCornerFabric,
  clearActiveCanvas,
  deleteFabricCanvas,
} from '../../shared/utils/fabric';
import { printPDF, getPDFDocument } from '../../shared/utils/pdf-js';
import { DEFAULT_IMAGE_OPTIONS, DEFAULT_TEXT_OPTIONS, DEFAULT_CLOSE_OPTIONS } from '../../shared/configs';
import type {
  SpecifyPageArgs,
  RenderImageArgs,
  CreateCloseFabricArgs,
  SupportFileType,
  CloseSvgOptions,
} from '../../shared/types/fabric';

export function useFabric(id = '') {
  const pages = useRef(0);
  const closeFabric = useRef<FabricObject | null>(null);
  const selectedFabric = useRef<FabricObject | null>(null);
  const canvasScale = useRef(1);
  const closeOptions = useRef<CloseSvgOptions>({ ...DEFAULT_CLOSE_OPTIONS });

  function createCanvas() {
    if (!id || fabricMap.has(id)) return;
    const canvas = createFabricCanvas(id);

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
    const PDF = createPdfInfo(file, PDFBase64);

    try {
      await specifyPage({ page: 1, PDFBase64, scale: 0.8, password });
      return { ...PDF, pages: pages.current };
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function specifyPage({ page, PDFBase64, scale, password }: SpecifyPageArgs) {
    try {
      const pdfDoc = await getPDFDocument(PDFBase64, password);
      const pdfPage = await pdfDoc.getPage(page);
      const { renderTask, canvas } = createRenderTask(pdfPage, scale);

      pages.current = pdfDoc.numPages;

      return renderTask.promise.then(() => renderCanvas(canvas));
    } catch (error) {
      return Promise.reject(error);
    }
  }

  function renderCanvas(canvasTemp: HTMLCanvasElement) {
    renderFabricCanvas(id, canvasTemp);
  }

  async function drawImage(file: File) {
    return await drawFabricImage(id, file);
  }

  async function renderImage({ url, scale = 0.5 }: RenderImageArgs) {
    await renderFabricImage(id, { url, scale });
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
    fabric.on('modified', event => moveCloseFabric(event.target, closeFabric.current));
    fabric.on('scaling', event => moveCloseFabric(event.transform.target, closeFabric.current));
    fabric.on('moving', event => moveCloseFabric(event.transform.target, closeFabric.current));
    fabric.on('rotating', event => moveCloseFabric(event.transform.target, closeFabric.current));
  }

  async function createCloseFabric({
    canvas,
    target,
    stroke = closeOptions.current.stroke,
    uuid = Date.now(),
  }: CreateCloseFabricArgs) {
    if (closeFabric.current?.stroke === `${stroke}-${uuid}`) return;

    const group = await generateCloseFabric(closeOptions.current.src, stroke, uuid);

    deleteCloseFabric(canvas);
    closeFabric.current = group;
    selectedFabric.current = target;
    onCloseFabric(canvas, target, uuid);
    scaleFabric(canvasScale.current, true);
    canvas.add(group);
  }

  function onCloseFabric(canvas: Canvas, target: FabricObject, uuid: number) {
    if (!closeFabric.current) return;

    closeFabric.current.on('selected', () => {
      canvas.remove(target);
      deleteCloseFabric(canvas);
    });
    closeFabric.current.on('mouseover', () => {
      createCloseFabric({
        canvas,
        target,
        stroke: closeOptions.current.hoverStroke,
        uuid,
      });
    });
    closeFabric.current.on('mouseout', () => {
      createCloseFabric({ canvas, target, stroke: closeOptions.current.stroke, uuid });
    });
  }

  function scaleFabric(scale: number, isCreate = false) {
    const canvas = fabricMap.get(id);

    canvasScale.current = scale;
    if (!canvas) return;
    scaleCornerFabric(selectedFabric.current, scale, closeOptions.current);
    scaleCloseFabric(selectedFabric.current, scale, closeFabric.current);
    if (isCreate) return;

    canvas.renderAll();
  }

  function setCloseSvgOptions(options?: CloseSvgOptions) {
    if (!options) return;
    closeOptions.current = { ...closeOptions.current, ...options };

    const canvas = fabricMap.get(id);

    if (!closeFabric || !selectedFabric.current || !canvas) return;
    createCloseFabric({ target: selectedFabric.current, canvas });
  }

  function deleteCloseFabric(canvas: Canvas) {
    if (!closeFabric.current) return;

    canvas.remove(closeFabric.current);
    closeFabric.current = selectedFabric.current = null;
  }

  function clearActive() {
    clearActiveCanvas(id);
  }

  function deleteCanvas() {
    deleteFabricCanvas(id);
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
