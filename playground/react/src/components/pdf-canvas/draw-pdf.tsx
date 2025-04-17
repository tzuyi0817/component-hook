import { useState, type ChangeEvent } from 'react';
import PdfCanvas, { loadFile, type PDF } from '@component-hook/pdf-canvas/react';

export function DrawPdf() {
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
      {currentPdf ? <PdfCanvas file={currentPdf} /> : <p>Please select a PDF file or image.</p>}

      <button>
        <input
          type="file"
          accept="application/pdf, .jpg, .png"
          onChange={uploadFile}
        />
        select file
      </button>

      <div>
        <p>base64: {currentPdf?.PDFBase64 ? `${currentPdf.PDFBase64.slice(0, 30)}...` : 'null'}</p>
        <p>file id: {currentPdf?.PDFId ?? 'null'}</p>
        <p>file name: {currentPdf?.name ?? 'null'}</p>
        <p>total pages: {currentPdf?.pages ?? 'null'}</p>
        <p>update date: {currentPdf?.updateDate ?? 'null'}</p>
      </div>
    </div>
  );
}
