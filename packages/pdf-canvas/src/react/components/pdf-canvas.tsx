import { useRef, useEffect, useMemo, useImperativeHandle, forwardRef, type Ref } from 'react';
import type { ImageProps, TextProps, TOptions } from 'fabric';
import { useFabric } from '../hooks/use-fabric';
import { useResize } from '../hooks/use-resize';
import type { ComponentProps } from '../../shared/types/common';

export interface PdfCanvasHandle {
  addImage: (src: string, options?: TOptions<ImageProps>) => void;
  addText: (text: string, options?: TOptions<TextProps>) => void;
  clearActive: () => void;
  deleteCanvas: () => void;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

export const PdfCanvas = forwardRef<PdfCanvasHandle, ComponentProps>(PdfCanvasComponent);

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
  }: ComponentProps,
  ref: Ref<PdfCanvasHandle>,
) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const computedCanvasId = `${canvasId}-${page - 1}`;
  const containerScale = useMemo(() => fileZoom * canvasScale, [fileZoom, canvasScale]);

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
  } = useFabric(computedCanvasId);

  useResize(setPDF);

  async function setPDF() {
    window.requestAnimationFrame(async () => {
      await createCanvas();

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
    });
  }

  function dropImage(event: React.DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (!isDrop || !event.dataTransfer) return;

    const { dataTransfer, clientX, clientY } = event;
    const text = dataTransfer.getData('text');
    const imageSrc = dataTransfer.getData('image');
    const position = { left: clientX - 71, top: clientY - 55 };

    if (imageSrc) addImage(imageSrc, position);
    if (text) addText(text, position);
  }

  function addImage(src: string, options?: TOptions<ImageProps>) {
    addFabric(src, { ...options, ...dropImageOptions });
  }

  function addText(text: string, options?: TOptions<TextProps>) {
    addTextFabric(text, { ...options, ...dropTextOptions });
  }

  useImperativeHandle(ref, () => ({ addImage, addText, clearActive, deleteCanvas, canvasRef }));

  useEffect(() => {
    setPDF();
    return () => deleteCanvas();
  }, [fileScale, page, file, password]);

  useEffect(() => {
    scaleFabric(containerScale);
  }, [containerScale]);

  useEffect(() => {
    setCloseSvgOptions(closeSvgOptions);
  }, [closeSvgOptions]);

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
