import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, type Ref } from 'react';
import { DEFAULT_SELECTION_OPTIONS } from '../../shared/constants';
import { useFabric } from '../hooks/use-fabric';
import { useResize } from '../hooks/use-resize';
import type { ComponentProps } from '../../shared/types/common';
import type {
  DropOffset,
  FabricPointerEvent,
  FabricSelectionClearedEvent,
  FabricSelectionCreatedEvent,
} from '../../shared/types/fabric';
import type { FabricObjectProps, ImageProps, TextProps, TOptions } from 'fabric';

export interface PdfCanvasHandle {
  reload: () => Promise<void>;
  addImage: (src: string, options?: TOptions<ImageProps>) => void;
  addText: (text: string, options?: TOptions<TextProps>) => void;
  clearActive: () => void;
  deleteCanvas: () => void;
  setActiveFabric: (options: TOptions<FabricObjectProps>) => void;
  copyActiveFabric: () => Promise<void>;
  deleteActiveFabric: () => void;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}

interface ComponentEmits {
  onLoaded?: () => void;
  onReload?: () => void;
  onPointerDown?: (event: FabricPointerEvent) => void;
  onPointerMove?: (event: FabricPointerEvent) => void;
  onPointerUp?: (event: FabricPointerEvent) => void;
  onSelectionCreated?: (event: FabricSelectionCreatedEvent) => void;
  onSelectionCleared?: (event: FabricSelectionClearedEvent) => void;
}

export const PdfCanvas = forwardRef<PdfCanvasHandle, ComponentProps & ComponentEmits>(PdfCanvasComponent);

function PdfCanvasComponent(
  {
    file,
    page = 1,
    canvasId = 'PDF-canvas',
    fileZoom = 1,
    fileScale = 1,
    canvasScale = 1,
    canvasClass = '',
    isDrop = false,
    password,
    dropTextOptions,
    dropImageOptions,
    closeSvgOptions,
    selectionOptions,
    manualReload,
    onLoaded,
    onReload,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onSelectionCreated,
    onSelectionCleared,
  }: ComponentProps & ComponentEmits,
  ref: Ref<PdfCanvasHandle>,
) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const computedCanvasId = `${canvasId}-${page - 1}`;
  const containerScale = useMemo(() => fileZoom * canvasScale, [fileZoom, canvasScale]);

  const computedSelectionOptions = useMemo(() => {
    return { ...DEFAULT_SELECTION_OPTIONS, ...selectionOptions };
  }, [selectionOptions]);

  const {
    createCanvas,
    specifyPage,
    addFabric,
    addTextFabric,
    renderImage,
    clearActive,
    deleteCanvas,
    scaleFabric,
    setActiveFabric,
    setCloseSvgOptions,
    copyActiveFabric,
    deleteActiveFabric,
  } = useFabric({
    id: computedCanvasId,
    selectionOptions: computedSelectionOptions,
    pointerDown: onPointerDown,
    pointerMove: onPointerMove,
    pointerUp: onPointerUp,
    selectionCreated: onSelectionCreated,
    selectionCleared: onSelectionCleared,
  });

  useResize(handleReload);

  async function setPDF() {
    globalThis.requestAnimationFrame(async () => {
      createCanvas();

      if (file.data?.type.startsWith('image/')) {
        const scaleDown = 3;

        renderImage({ data: file.data, scale: fileScale / scaleDown });
        onLoaded?.();
        return;
      }

      const data = file.canvas?.[page - 1] ?? file.data;

      if (data) {
        await specifyPage({
          page,
          data,
          scale: fileScale,
          password,
        });
      }

      onLoaded?.();
    });
  }

  function dropImage(event: React.DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (!isDrop || !event.dataTransfer) return;
    const { dataTransfer, nativeEvent } = event;
    const { offsetX, offsetY } = nativeEvent;
    const text = dataTransfer.getData('text/plain');
    const imageSrc = dataTransfer.getData('text/uri-list');
    const customOffset = dataTransfer.getData('custom/offset');
    const offset = customOffset ? JSON.parse(customOffset) : null;
    const options = { top: offsetY, left: offsetX };
    const dropOffset = { x: offset?.offsetX ?? 0, y: offset?.offsetY ?? 0 };

    if (imageSrc) {
      addImage(imageSrc, options, dropOffset);
    } else if (text) {
      addText(text, options, dropOffset);
    }
  }

  function addImage(src: string, options?: TOptions<ImageProps>, offset?: DropOffset) {
    addFabric(src, { ...dropImageOptions, ...options }, offset);
  }

  function addText(text: string, options?: TOptions<TextProps>, offset?: DropOffset) {
    addTextFabric(text, { ...dropTextOptions, ...options }, offset);
  }

  function handleReload() {
    if (!manualReload) setPDF();

    onReload?.();
  }

  useImperativeHandle(ref, () => ({
    reload: setPDF,
    addImage,
    addText,
    clearActive,
    deleteCanvas,
    setActiveFabric,
    copyActiveFabric,
    deleteActiveFabric,
    canvasRef,
  }));

  useEffect(() => {
    handleReload();
  }, [fileScale, page, file, password]);

  useEffect(() => {
    scaleFabric(containerScale);
  }, [containerScale]);

  useEffect(() => {
    setCloseSvgOptions(closeSvgOptions);
  }, [closeSvgOptions]);

  useEffect(() => {
    return () => deleteCanvas();
  }, []);

  return (
    <div
      style={{ transform: `scale(${containerScale})` }}
      onDragOver={e => e.preventDefault()}
      onDragEnter={e => e.preventDefault()}
      onDrop={dropImage}
    >
      <canvas
        id={computedCanvasId}
        ref={canvasRef}
        className={canvasClass}
      ></canvas>
    </div>
  );
}
