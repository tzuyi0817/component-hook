import {
  Canvas,
  FabricImage,
  FabricText,
  type FabricObject,
  type FabricObjectProps,
  type ImageProps,
  type TextProps,
  type TOptions,
} from 'fabric';
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
import type { Ref } from 'vue';

export function useFabric(params?: FabricHookParams & { selectionOptions?: Ref<TOptions<FabricObjectProps>> }) {
  const {
    id = '',
    selectionOptions,
    pointerDown,
    pointerMove,
    pointerUp,
    selectionCreated,
    selectionCleared,
  } = params || {};
  let closeFabric: FabricObject | null = null;
  let selectedFabric: CacheFabricObject | null = null;
  let canvasScale = 1;
  let closeOptions: CloseSvgOptions = { ...DEFAULT_CLOSE_OPTIONS };

  function createCanvas() {
    if (!id || fabricMap.has(id)) return;
    const canvas = createFabricCanvas(id);

    canvas.on('selection:created', event => {
      selectionCreated?.(event);

      if (event.selected.length <= 1) return;
      const active = canvas.getActiveObject();

      if (!active) return;

      selectedFabric = active;

      if (selectionOptions?.value) {
        selectedFabric.set(selectionOptions.value);
      }

      selectedFabric._cornerSize = selectedFabric.cornerSize;
      scaleFabric(canvasScale);
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
    stroke = closeOptions.stroke,
    uuid = Date.now(),
  }: CreateCloseFabricArgs) {
    const activeCount = canvas.getActiveObjects().length;

    if (activeCount > 1 || closeFabric?.stroke === `${stroke}-${uuid}`) return;
    const group = await generateCloseFabric(closeOptions, uuid, stroke);

    deleteCloseFabric(canvas);
    closeFabric = group;
    selectedFabric = target;
    onCloseFabric(canvas, target, uuid);
    scaleFabric(canvasScale, true);

    if (!group) return;

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

  function scaleFabric(scale: number, isCreate = false) {
    const canvas = fabricMap.get(id);

    canvasScale = scale;

    if (!canvas) return;

    scaleCornerFabric(selectedFabric, scale);
    scaleCloseFabric(selectedFabric, scale, closeFabric);

    if (isCreate) return;

    canvas.renderAll();
  }

  function setCloseSvgOptions(options?: CloseSvgOptions) {
    if (!options) return;
    closeOptions = { ...closeOptions, ...options };

    const canvas = fabricMap.get(id);

    if (!closeFabric || !selectedFabric || !canvas) return;
    createCloseFabric({ target: selectedFabric, canvas });
  }

  function deleteCloseFabric(canvas: Canvas) {
    selectedFabric = null;

    if (!closeFabric) return;

    canvas.remove(closeFabric);
    closeFabric = null;
  }

  function clearActive() {
    clearActiveCanvas(id);
  }

  function deleteCanvas() {
    deleteFabricCanvas(id);
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
    copyActiveFabric,
    deleteActiveFabric,
  };
}
