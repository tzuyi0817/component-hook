import { getDocument, GlobalWorkerOptions, version } from 'pdfjs-dist';
import { fileToArrayBuffer } from '../shared/utils/file';
import type { SpecifyPageArgs } from '../shared/types/fabric';

interface WorkerMessageEvent {
  data: SpecifyPageArgs & { data: Blob; id?: string; units: number };
}

GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.mjs`;

globalThis.addEventListener('message', async (event: WorkerMessageEvent) => {
  const { data, password, id, page, units, scale } = event.data;
  const document = {
    fonts: globalThis.fonts,
    createElement: (tag: string) => {
      if (tag === 'canvas') {
        return new OffscreenCanvas(1, 1);
      }

      return null;
    },
  } as unknown as Document;

  const arrayBuffer = await fileToArrayBuffer(data);
  const pdfDoc = await getDocument({ data: arrayBuffer, password, ownerDocument: document }).promise;
  const pages = pdfDoc.numPages;

  if (!id) {
    globalThis.postMessage({ status: 'success', pages });
    return;
  }

  const pdfPage = await pdfDoc.getPage(page);
  const viewport = pdfPage.getViewport({ scale });
  const width = Math.floor(viewport.width * units);
  const height = Math.floor(viewport.height * units);
  const canvas = new OffscreenCanvas(width, height);
  const context = canvas.getContext('2d') as unknown as CanvasRenderingContext2D;
  const renderContext = {
    canvasContext: context,
    viewport,
    transform: [units, 0, 0, units, 0, 0],
  };

  const renderTask = pdfPage.render(renderContext);

  renderTask.promise.then(() => {
    const bitmap = canvas.transferToImageBitmap();

    globalThis.postMessage({ status: 'success', pages, bitmap, width, height }, [bitmap]);
  });
});
