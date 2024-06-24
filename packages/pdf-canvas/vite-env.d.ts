/// <reference types="vite/client" />

declare module 'pdfjs-dist/build/pdf.worker.mjs';

declare interface Window {
  pdfjsWorker: Worker;
}
