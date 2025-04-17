import { loadFile, type PDF } from '@component-hook/pdf-canvas/react';
import { lazy, Suspense, useState, type ChangeEvent } from 'react';

const PdfCanvas = lazy(() => import('@component-hook/pdf-canvas/react'));

export function MultiplePdf() {
  const [currentPdf, setCurrentPdf] = useState<PDF>();

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const { files } = target;

    if (!files || files.length === 0) return;

    const file = files[0];
    const content = await loadFile(file);

    setCurrentPdf(content);
    target.value = '';
  };

  return (
    <div>
      {currentPdf ? (
        <ul>
          {Array.from({ length: currentPdf.pages }, (_, index) => index + 1).map(page => (
            <li key={page}>
              <Suspense fallback={'loading...'}>
                <PdfCanvas
                  file={currentPdf}
                  canvasId="multiple"
                  page={page}
                />
              </Suspense>
            </li>
          ))}
        </ul>
      ) : (
        <p>Please select a multiple page PDF file.</p>
      )}

      <button>
        <input
          type="file"
          accept="application/pdf"
          onChange={uploadFile}
        />
        select file
      </button>

      {currentPdf && (
        <div>
          <p>base64: {currentPdf.PDFBase64 ? `${currentPdf.PDFBase64.slice(0, 30)}...` : 'null'}</p>
          <p>file id: {currentPdf.PDFId ?? 'null'}</p>
          <p>file name: {currentPdf.name ?? 'null'}</p>
          <p>total pages: {currentPdf.pages ?? 'null'}</p>
          <p>update date: {currentPdf.updateDate ?? 'null'}</p>
        </div>
      )}
    </div>
  );
}
