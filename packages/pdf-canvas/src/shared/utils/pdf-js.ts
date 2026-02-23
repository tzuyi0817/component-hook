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

export function renderPageCanvas(args: SpecifyPageArgs, id?: string) {
  const CSS_UNITS = getPixelsPerPoint() / window.devicePixelRatio;
  const options = { ...args, id, units: CSS_UNITS };

  if (supportsOffscreenCanvas()) {
    return renderWithWorker(options);
  } else {
    return renderWithMainThread(options);
  }
}

async function renderWithWorker({
  data,
  password,
  id,
  page,
  units,
  scale,
}: SpecifyPageArgs & { id?: string; units: number }) {
  const worker = new Worker(new URL('../../workers/pdfjs.worker', import.meta.url), { type: 'module' });

  try {
    worker.postMessage({ data, password, id, page, units, scale });

    const result = await new Promise<{ pages: number; canvas: HTMLCanvasElement | null }>((resolve, reject) => {
      const handleMessage = (event: MessageEvent) => {
        if (!event.data.status) return;

        if (event.data.status === 'success') {
          const { bitmap, width, height, pages } = event.data;

          if (bitmap && id) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            canvas.width = width;
            canvas.height = height;
            context?.drawImage(bitmap, 0, 0);
            bitmap.close();
            resolve({ pages, canvas });
          } else {
            resolve({ pages, canvas: null });
          }
        }

        if (event.data.status === 'error') {
          reject(event.data.error);
        }

        worker.removeEventListener('message', handleMessage);
      };
      const handleError = (error: ErrorEvent) => {
        reject(new Error(`Worker error: ${error.message}`));
      };

      worker.addEventListener('message', handleMessage);
      worker.addEventListener('error', handleError, { once: true });
    });

    return result;
  } finally {
    worker.terminate();
  }
}

async function renderWithMainThread({
  data,
  password,
  id,
  page,
  scale,
  units,
}: SpecifyPageArgs & { id?: string; units: number }) {
  const arrayBuffer = await fileToArrayBuffer(data);
  const pdfDoc = await getDocument({ data: arrayBuffer, password }).promise;

  try {
    const pages = pdfDoc.numPages;

    if (!id) {
      return { canvas: null, pages };
    }

    const pdfPage = await pdfDoc.getPage(page);
    const viewport = pdfPage.getViewport({ scale });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Failed to get 2d context');
    }

    const renderContext = {
      canvasContext: context,
      viewport,
      transform: [units, 0, 0, units, 0, 0],
    };

    canvas.width = Math.floor(viewport.width * units);
    canvas.height = Math.floor(viewport.height * units);

    await pdfPage.render(renderContext).promise;

    return { canvas, pages };
  } finally {
    pdfDoc.destroy();
  }
}
