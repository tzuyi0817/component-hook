import { getDocument, GlobalWorkerOptions, version } from 'pdfjs-dist';
import type { SpecifyPageArgs } from '../types/fabric';
import { getPixelsPerPoint } from './common';
import { readfile } from './reader';

if (!supportsOffscreenCanvas()) {
  GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.mjs`;
}

export async function printPDF(file: File): Promise<string | void> {
  const Base64Prefix = 'data:application/pdf;base64,';
  const pdf = await readfile(file);

  if (typeof pdf !== 'string') return;

  return globalThis.atob(pdf.slice(Base64Prefix.length));
}

function supportsOffscreenCanvas() {
  try {
    return (
      typeof OffscreenCanvas !== 'undefined' &&
      typeof HTMLCanvasElement !== 'undefined' &&
      typeof HTMLCanvasElement.prototype.transferControlToOffscreen === 'function'
    );
  } catch {
    return false;
  }
}

export async function renderPageCanvas({ page, PDFBase64, scale, password }: SpecifyPageArgs, id?: string) {
  const CSS_UNITS = getPixelsPerPoint() / window.devicePixelRatio;

  if (supportsOffscreenCanvas()) {
    const worker = new Worker(new URL('../../workers/pdfjs.worker', import.meta.url), { type: 'module' });

    worker.postMessage({ data: PDFBase64, password, id, page, units: CSS_UNITS, scale });

    const result = await new Promise<{ pages: number; canvas: HTMLCanvasElement | null }>(resolve => {
      worker.addEventListener('message', ({ data }) => {
        if (data.status !== 'success') return;

        if (data.bitmap) {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('bitmaprenderer');

          canvas.width = data.width;
          canvas.height = data.height;
          context?.transferFromImageBitmap(data.bitmap);
          resolve({ pages: data.pages, canvas });
        } else {
          resolve({ pages: data.pages, canvas: null });
        }
      });
    });

    return result;
  } else {
    const pdfDoc = await getDocument({ data: PDFBase64, password }).promise;
    const pages = pdfDoc.numPages;

    if (!id) return { canvas: null, pages };

    const pdfPage = await pdfDoc.getPage(page);
    const viewport = pdfPage.getViewport({ scale });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    const renderContext = {
      canvasContext: context,
      viewport,
      transform: [CSS_UNITS, 0, 0, CSS_UNITS, 0, 0],
    };

    canvas.width = Math.floor(viewport.width * CSS_UNITS);
    canvas.height = Math.floor(viewport.height * CSS_UNITS);

    const renderTask = pdfPage.render(renderContext);

    return renderTask.promise.then(() => ({ canvas, pages }));
  }
}
