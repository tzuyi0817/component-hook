import { getDocument, GlobalWorkerOptions, version } from 'pdfjs-dist';
import type { SpecifyPageArgs } from '../types/fabric';
import { getPixelsPerPoint } from './common';
import { readfile } from './reader';

GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.mjs`;

export async function printPDF(file: File): Promise<string | void> {
  const Base64Prefix = 'data:application/pdf;base64,';
  const pdf = await readfile(file);

  if (typeof pdf !== 'string') return;

  return globalThis.atob(pdf.slice(Base64Prefix.length));
}

export async function renderPageCanvas({ page, PDFBase64, scale, password }: SpecifyPageArgs, id?: string) {
  const CSS_UNITS = getPixelsPerPoint() / window.devicePixelRatio;
  const canvas = document.createElement('canvas');

  const pdfDoc = await getDocument({ data: PDFBase64, password }).promise;

  if (!id) return { canvas: null, pages: pdfDoc.numPages };

  const pdfPage = await pdfDoc.getPage(page);
  const viewport = pdfPage.getViewport({ scale });
  const context = canvas.getContext('2d')!;
  const renderContext = {
    canvasContext: context,
    viewport,
    transform: [CSS_UNITS, 0, 0, CSS_UNITS, 0, 0],
  };

  canvas.width = Math.floor(viewport.width * CSS_UNITS);
  canvas.height = Math.floor(viewport.height * CSS_UNITS);

  const renderTask = pdfPage.render(renderContext);

  return renderTask.promise.then(() => ({ canvas, pages: pdfDoc.numPages }));
}
