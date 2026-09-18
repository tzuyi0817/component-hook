import { resolve } from 'node:path';

export const projectRoot = resolve(import.meta.dirname, '..');
export const pickerPackage = resolve(projectRoot, 'packages/picker');
export const pdfCanvasPackage = resolve(projectRoot, 'packages/pdf-canvas');
export const reactPlayground = resolve(projectRoot, 'playground/react/src/pages');
