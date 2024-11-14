import * as pdfjsLib from 'pdfjs-dist';
// import * as pdfjsWorker from 'pdfjs-dist/build/pdf.worker.mjs';
import { dependencies } from '../../../package.json';
import { readfile } from './reader';

const version = dependencies['pdfjs-dist'].replace('^', '');

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.mjs`;

export async function printPDF(file: File): Promise<string | void> {
  const Base64Prefix = 'data:application/pdf;base64,';
  const pdf = await readfile(file);
  if (typeof pdf !== 'string') return;

  return window.atob(pdf.slice(Base64Prefix.length));
}

export function getPDFDocument(data: string, password?: string) {
  return pdfjsLib.getDocument({ data, password }).promise;
}
