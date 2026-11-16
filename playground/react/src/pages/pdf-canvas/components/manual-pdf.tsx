import PdfCanvas, {
  loadFile,
  type FabricOverlay,
  type PDF,
  type PdfCanvasHandle,
} from '@component-hook/pdf-canvas/react';
import { useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react';

function toPercent(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}

export function ManualPdf() {
  const [currentPdf, setCurrentPdf] = useState<PDF>();
  const [overlay, setOverlay] = useState<FabricOverlay | null>();
  const overlayUrl = useMemo(() => (overlay ? URL.createObjectURL(overlay.blob) : ''), [overlay]);
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

    pdfCanvasRef.current.addImage('https://pdf-signature-puce.vercel.app/cover.jpg', { crossOrigin: 'anonymous' });
  };

  const addText = () => {
    if (!pdfCanvasRef.current) return;

    pdfCanvasRef.current.addText('Can drag the text onto canvas.');
  };

  const exportOverlay = async () => {
    if (!pdfCanvasRef.current) return;

    setOverlay(await pdfCanvasRef.current.exportOverlay({ dpi: 150 }));
  };

  useEffect(() => {
    return () => URL.revokeObjectURL(overlayUrl);
  }, [overlayUrl]);

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
        <button onClick={exportOverlay}>export overlay</button>
      </div>

      {overlay && (
        <>
          <img
            src={overlayUrl}
            className="max-w-full border border-dashed"
            alt="Exported overlay"
          />

          <p className="font-mono text-sm">
            x: {toPercent(overlay.x)}, y: {toPercent(overlay.y)}, width: {toPercent(overlay.width)}, height:{' '}
            {toPercent(overlay.height)}
          </p>
        </>
      )}

      {overlay === null && <p className="font-mono text-sm">There is nothing to export.</p>}
    </div>
  );
}
