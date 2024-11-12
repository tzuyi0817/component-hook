import { resolve } from 'node:path';

export const projectRoot = resolve(__dirname, '..');
export const pickerPackage = resolve(projectRoot, 'packages/picker');
export const pdfCanvasPackage = resolve(projectRoot, 'packages/pdf-canvas/index.ts');
