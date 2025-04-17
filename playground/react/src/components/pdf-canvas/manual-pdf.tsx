import { useRef, useState, type ChangeEvent } from 'react';
import PdfCanvas, { loadFile, type PDF, type PdfCanvasHandle } from '@component-hook/pdf-canvas/react';

export function ManualPdf() {
  const [currentPdf, setCurrentPdf] = useState<PDF>();
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

  const addImage = () => {
    if (!pdfCanvasRef.current) return;

    pdfCanvasRef.current.addImage('https://pdf-signature-puce.vercel.app/cover.jpg');
  };

  const addText = () => {
    if (!pdfCanvasRef.current) return;

    pdfCanvasRef.current.addText('Can drag the text onto canvas.');
  };

  return (
    <div>
      {currentPdf ? (
        <PdfCanvas
          ref={pdfCanvasRef}
          file={currentPdf}
          canvasId="manual"
          dropImageOptions={{ scaleX: 0.1, scaleY: 0.1 }}
          dropTextOptions={{ fontSize: 20 }}
          isDrop
        />
      ) : (
        <p className="font-mono text-sm">Please select a PDF file or image.</p>
      )}

      <div>
        <button>
          <input
            type="file"
            accept="application/pdf, .jpg, .png"
            onChange={uploadFile}
          />
          select file
        </button>

        <button onClick={addImage}>add image</button>
        <button onClick={addText}>add text</button>
      </div>
    </div>
  );
}
