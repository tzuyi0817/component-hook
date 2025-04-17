import { useState, useRef, type DragEvent, type ChangeEvent } from 'react';
import PdfCanvas, { loadFile, type PDF, type PdfCanvasHandle } from '@component-hook/pdf-canvas/react';

export function DropPdf() {
  const [currentPdf, setCurrentPdf] = useState<PDF>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const pdfCanvasRef = useRef<PdfCanvasHandle | null>(null);

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const { files } = target;

    if (!files || files.length === 0) return;

    const file = files[0];
    const content = await loadFile(file);

    setCurrentPdf(content);
    target.value = '';
  };

  const dragImage = (event: DragEvent<HTMLImageElement>) => {
    const { src, offsetHeight, offsetWidth } = event.target as HTMLImageElement;
    const offsetX = event.nativeEvent.offsetX / offsetWidth;
    const offsetY = event.nativeEvent.offsetY / offsetHeight;

    event.dataTransfer?.setData('text/uri-list', src);
    event.dataTransfer?.setData('custom/offset', JSON.stringify({ offsetX, offsetY }));
  };

  const dragText = (event: DragEvent<HTMLParagraphElement>) => {
    const { textContent, offsetHeight, offsetWidth } = event.target as HTMLParagraphElement;
    const offsetX = event.nativeEvent.offsetX / offsetWidth;
    const offsetY = event.nativeEvent.offsetY / offsetHeight;

    event.dataTransfer?.setData('text/plain', textContent ?? '');
    event.dataTransfer?.setData('custom/offset', JSON.stringify({ offsetX, offsetY }));
  };

  return (
    <div>
      <img
        src="https://pdf-signature-puce.vercel.app/cover.jpg"
        width="300"
        height="200"
        alt="PDF signature cover"
        onDragStart={dragImage}
      />

      <p
        draggable="true"
        onDragStart={dragText}
        style={{ width: 'fit-content' }}
      >
        Can drag the text onto canvas.
      </p>

      {currentPdf ? (
        <PdfCanvas
          ref={pdfCanvasRef}
          file={currentPdf}
          canvasId="drop"
          dropImageOptions={{ scaleX: 0.1, scaleY: 0.1 }}
          dropTextOptions={{ fontSize: 20 }}
          isDrop
        />
      ) : (
        <p>Please select a PDF file or image.</p>
      )}

      <div className="flex gap-3 flex-wrap">
        <button>
          <input
            type="file"
            accept="application/pdf, .jpg, .png"
            ref={fileInputRef}
            onChange={uploadFile}
          />
          select file
        </button>

        <button onClick={() => pdfCanvasRef.current?.copyActiveFabric()}>copy</button>
        <button onClick={() => pdfCanvasRef.current?.deleteActiveFabric()}>delete</button>
      </div>
    </div>
  );
}
