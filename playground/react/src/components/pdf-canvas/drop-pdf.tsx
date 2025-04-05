import { useState, useRef, type DragEvent, type ChangeEvent } from 'react';
import PdfCanvas, { useFabric, type PDF } from '@component-hook/pdf-canvas/react';

export function DropPdf() {
  const { loadFile } = useFabric();
  const [currentPdf, setCurrentPdf] = useState<PDF>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
    const target = event.target as HTMLImageElement;

    event.dataTransfer.setData('text/uri-list', target.src);
  };

  const dragText = (event: DragEvent<HTMLParagraphElement>) => {
    const target = event.target as HTMLParagraphElement;

    event.dataTransfer.setData('text/plain', target.textContent || '');
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
      >
        Can drag the text onto canvas.
      </p>

      {currentPdf ? (
        <PdfCanvas
          file={currentPdf}
          canvasId="drop"
          dropImageOptions={{ scaleX: 0.1, scaleY: 0.1 }}
          dropTextOptions={{ fontSize: 20 }}
          isDrop
        />
      ) : (
        <p>Please select a PDF file or image.</p>
      )}

      <button>
        <input
          type="file"
          accept="application/pdf, .jpg, .png"
          ref={fileInputRef}
          onChange={uploadFile}
        />
        select file
      </button>
    </div>
  );
}
