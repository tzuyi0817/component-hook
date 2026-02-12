import {
  FabricImage,
  FabricText,
  type Canvas,
  type FabricObject,
  type FabricObjectProps,
  type ImageProps,
  type TextProps,
  type TOptions,
} from 'fabric';
import { useRef } from 'react';
import { DEFAULT_CLOSE_OPTIONS, DEFAULT_IMAGE_OPTIONS, DEFAULT_TEXT_OPTIONS } from '../../shared/constants';
import {
  clearActiveCanvas,
  copyActiveFabric as copyActive,
  createFabricCanvas,
  deleteActiveFabric as deleteActive,
  deleteFabricCanvas,
  specifyPage as drawSpecifyPage,
  fabricMap,
  generateCloseFabric,
  loadFile as loadFileToCanvas,
  renderFabricImage,
  scaleCloseFabric,
  scaleCornerFabric,
  setActiveFabric as setActive,
  setFabricOffset,
} from '../../shared/utils/fabric';
import type {
  CacheFabricImage,
  CacheFabricObject,
  CacheFabricText,
  CloseSvgOptions,
  CreateCloseFabricArgs,
  DropOffset,
  FabricHookParams,
  RenderImageArgs,
  SpecifyPageArgs,
} from '../../shared/types/fabric';

export function useFabric(params?: FabricHookParams & { selectionOptions?: TOptions<FabricObjectProps> }) {
  const {
    id = '',
    selectionOptions,
    pointerDown,
    pointerMove,
    pointerUp,
    selectionCreated,
    selectionCleared,
  } = params || {};
  const closeFabric = useRef<FabricObject | null>(null);
  const selectedFabric = useRef<CacheFabricObject | null>(null);
  const canvasScale = useRef(1);
  const closeOptions = useRef<CloseSvgOptions>({ ...DEFAULT_CLOSE_OPTIONS });

  function createCanvas() {
    if (!id || fabricMap.has(id)) return;
    const canvas = createFabricCanvas(id);

    canvas.on('selection:created', event => {
      selectionCreated?.(event);

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

    canvas.on('selection:cleared', event => {
      selectionCleared?.(event);
      deleteCloseFabric(canvas);
    });

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

  function renderImage({ data, scale = 0.5 }: RenderImageArgs) {
    return renderFabricImage(id, { data, scale });
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

  function setFabric(canvas: Canvas, fabric: CacheFabricImage | CacheFabricText | CacheFabricObject) {
    fabric.on('selected', event => createCloseFabric({ canvas, target: event.target }));
    fabric.on('modified', event => createCloseFabric({ canvas, target: event.target }));
    fabric.on('scaling', () => deleteCloseFabric(canvas));
    fabric.on('moving', () => deleteCloseFabric(canvas));
    fabric.on('rotating', () => deleteCloseFabric(canvas));
    fabric._cornerSize = fabric._cornerSize ?? fabric.cornerSize;
  }

  async function createCloseFabric({
    canvas,
    target,
    stroke = closeOptions.current.stroke,
    uuid = Date.now(),
  }: CreateCloseFabricArgs) {
    const activeCount = canvas.getActiveObjects().length;

    if (activeCount > 1 || closeFabric.current?.stroke === `${stroke}-${uuid}`) return;
    const group = await generateCloseFabric(closeOptions.current, uuid, stroke);

    deleteCloseFabric(canvas);
    closeFabric.current = group;
    selectedFabric.current = target;
    onCloseFabric(canvas, target, uuid);
    scaleFabric(canvasScale.current, true);

    if (!group) return;

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

  function setActiveFabric(options: TOptions<FabricObjectProps>) {
    setActive(id, options);
  }

  function copyActiveFabric() {
    return copyActive(id, setFabric);
  }

  function deleteActiveFabric() {
    deleteActive(id);
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
    setActiveFabric,
    copyActiveFabric,
    deleteActiveFabric,
  };
}
