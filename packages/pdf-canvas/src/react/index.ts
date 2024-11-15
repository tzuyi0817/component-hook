import { PdfCanvas, type PdfCanvasHandle } from './components/pdf-canvas';

export type { PdfCanvasHandle };
export { useFabric } from './hooks/use-fabric';
export type * from '../shared/types/common';
export type * from '../shared/types/fabric';
export type * from '../shared/types/pdf';

export default PdfCanvas;
