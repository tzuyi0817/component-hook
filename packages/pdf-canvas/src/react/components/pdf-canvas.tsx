import { useRef, useEffect, useMemo, useImperativeHandle, forwardRef, type Ref } from 'react';
import type { ImageProps, TextProps, TOptions, TPointerEventInfo, TPointerEvent } from 'fabric';
import { useFabric } from '../hooks/use-fabric';
import { useResize } from '../hooks/use-resize';
import { DEFAULT_SELECTION_OPTIONS } from '../../shared/configs';
import type { ComponentProps } from '../../shared/types/common';
import type { DropOffset } from '../../shared/types/fabric';

export interface PdfCanvasHandle {
  reload: () => Promise<void>;
  addImage: (src: string, options?: TOptions<ImageProps>) => void;
  addText: (text: string, options?: TOptions<TextProps>) => void;
  clearActive: () => void;
  deleteCanvas: () => void;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

interface ComponentEmits {
  onLoaded?: () => void;
  onReload?: () => void;
  onPointerDown?: (event: TPointerEventInfo<TPointerEvent>) => void;
  onPointerMove?: (event: TPointerEventInfo<TPointerEvent>) => void;
  onPointerUp?: (event: TPointerEventInfo<TPointerEvent>) => void;
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
    setCloseSvgOptions,
  } = useFabric({
    id: computedCanvasId,
    selectionOptions: computedSelectionOptions,
    pointerDown: onPointerDown,
    pointerMove: onPointerMove,
    pointerUp: onPointerUp,
  });

  useResize(setPDF);

  async function setPDF() {
    window.requestAnimationFrame(async () => {
      createCanvas();

      if (file.PDFBase64.startsWith('data:image') || file.canvas) {
        const { canvas } = file;
        const scaleDown = canvas ? 7 : 3;
        const url = canvas?.length ? canvas[page - 1] : file.PDFBase64;

        renderImage({ url, scale: fileScale / scaleDown });
        return;
      }

      await specifyPage({
        page,
        PDFBase64: file.PDFBase64,
        scale: fileScale,
        password,
      });

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

  useImperativeHandle(ref, () => ({ reload: setPDF, addImage, addText, clearActive, deleteCanvas, canvasRef }));

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
