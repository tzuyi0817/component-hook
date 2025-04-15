import { useRef } from 'react';
import {
  Canvas,
  FabricImage,
  FabricText,
  type FabricObject,
  type TOptions,
  type ImageProps,
  type TextProps,
  type FabricObjectProps,
} from 'fabric';
import {
  loadFile as loadFileToCanvas,
  fabricMap,
  createFabricCanvas,
  generateCloseFabric,
  renderFabricImage,
  scaleCloseFabric,
  scaleCornerFabric,
  clearActiveCanvas,
  deleteFabricCanvas,
  setFabricOffset,
  specifyPage as drawSpecifyPage,
} from '../../shared/utils/fabric';
import { DEFAULT_IMAGE_OPTIONS, DEFAULT_TEXT_OPTIONS, DEFAULT_CLOSE_OPTIONS } from '../../shared/configs';
import type {
  SpecifyPageArgs,
  RenderImageArgs,
  CreateCloseFabricArgs,
  CloseSvgOptions,
  FabricHookParams,
  DropOffset,
  CacheFabricImage,
  CacheFabricText,
  CacheFabricObject,
} from '../../shared/types/fabric';

export function useFabric(params?: FabricHookParams & { selectionOptions?: TOptions<FabricObjectProps> }) {
  const { id = '', selectionOptions, pointerDown, pointerMove, pointerUp } = params || {};
  const closeFabric = useRef<FabricObject | null>(null);
  const selectedFabric = useRef<CacheFabricObject | null>(null);
  const canvasScale = useRef(1);
  const closeOptions = useRef<CloseSvgOptions>({ ...DEFAULT_CLOSE_OPTIONS });

  function createCanvas() {
    if (!id || fabricMap.has(id)) return;
    const canvas = createFabricCanvas(id);

    canvas.on('selection:created', event => {
      if (event.selected.length <= 1) return;
      const active = canvas.getActiveObject();

      if (!active) return;

      selectedFabric.current = active;

      if (selectionOptions?.value) {
        selectedFabric.current.set(selectionOptions.value);
      }

      selectedFabric.current._cornerSize = selectedFabric.current.cornerSize;
      scaleFabric(canvasScale.current);
    });

    canvas.on('selection:cleared', () => deleteCloseFabric(canvas));

    if (pointerDown) canvas.on('mouse:down', pointerDown);
    if (pointerMove) canvas.on('mouse:move', pointerMove);
    if (pointerUp) canvas.on('mouse:up', pointerUp);

    return canvas;
  }

  function loadFile(file: File, password?: string) {
    return loadFileToCanvas(file, password, id);
  }

  function specifyPage(specifyPageParams: SpecifyPageArgs) {
    return drawSpecifyPage(specifyPageParams, id);
  }

  function renderImage({ url, scale = 0.5 }: RenderImageArgs) {
    return renderFabricImage(id, { url, scale });
  }

  async function addFabric(src: string, options?: TOptions<ImageProps>, offset?: DropOffset) {
    const canvas = fabricMap.get(id);

    if (!canvas) return;
    const image = await FabricImage.fromURL(src, {}, { ...DEFAULT_IMAGE_OPTIONS, ...options });

    setFabricOffset(image, offset);
    canvas.add(image);
    setFabric(canvas, image);
    canvas.setActiveObject(image);
  }

  function addTextFabric(text: string, options?: TOptions<TextProps>, offset?: DropOffset) {
    const canvas = fabricMap.get(id);

    if (!canvas) return;
    const textFabric = new FabricText(text, {
      ...DEFAULT_TEXT_OPTIONS,
      ...options,
    });

    setFabricOffset(textFabric, offset);
    canvas.add(textFabric);
    setFabric(canvas, textFabric);
    canvas.setActiveObject(textFabric);
  }

  function setFabric(canvas: Canvas, fabric: CacheFabricImage | CacheFabricText) {
    fabric.on('selected', event => createCloseFabric({ canvas, target: event.target }));
    fabric.on('modified', event => createCloseFabric({ canvas, target: event.target }));
    fabric.on('scaling', () => deleteCloseFabric(canvas));
    fabric.on('moving', () => deleteCloseFabric(canvas));
    fabric.on('rotating', () => deleteCloseFabric(canvas));
    fabric._cornerSize = fabric.cornerSize;
  }

  async function createCloseFabric({
    canvas,
    target,
    stroke = closeOptions.current.stroke,
    uuid = Date.now(),
  }: CreateCloseFabricArgs) {
    const activeCount = canvas.getActiveObjects().length;

    if (activeCount > 1 || closeFabric.current?.stroke === `${stroke}-${uuid}`) return;
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

    scaleCornerFabric(selectedFabric.current, scale);
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
    selectedFabric.current = null;

    if (!closeFabric.current) return;

    canvas.remove(closeFabric.current);
    closeFabric.current = null;
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
