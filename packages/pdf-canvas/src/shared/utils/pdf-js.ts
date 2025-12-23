import { getDocument, GlobalWorkerOptions, version } from 'pdfjs-dist';
import { getPixelsPerPoint } from './common';
import { fileToArrayBuffer } from './file';
import type { SpecifyPageArgs } from '../types/fabric';

if (!supportsOffscreenCanvas()) {
  GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.mjs`;
}

function supportsOffscreenCanvas() {
  try {
    return (
      typeof OffscreenCanvas !== 'undefined' &&
      typeof HTMLCanvasElement !== 'undefined' &&
      typeof HTMLCanvasElement.prototype.transferControlToOffscreen === 'function' &&
      globalThis.self === window.top
    );
  } catch {
    return false;
  }
}

export async function renderPageCanvas({ page, data, scale, password }: SpecifyPageArgs, id?: string) {
  const CSS_UNITS = getPixelsPerPoint() / window.devicePixelRatio;

  if (supportsOffscreenCanvas()) {
    const worker = new Worker(new URL('../../workers/pdfjs.worker', import.meta.url), { type: 'module' });

    worker.postMessage({ data, password, id, page, units: CSS_UNITS, scale });

    const result = await new Promise<{ pages: number; canvas: HTMLCanvasElement | null }>(resolve => {
      worker.addEventListener('message', event => {
        if (event.data.status !== 'success') return;

        const { bitmap, width, height, pages } = event.data;

        if (bitmap) {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('bitmaprenderer');

          canvas.width = width;
          canvas.height = height;
          context?.transferFromImageBitmap(bitmap);
          resolve({ pages, canvas });
        } else {
          resolve({ pages, canvas: null });
        }
      });
    });

    return result;
  } else {
    const arrayBuffer = await fileToArrayBuffer(data);
    const pdfDoc = await getDocument({ data: arrayBuffer, password }).promise;
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
