import type { DefineComponent } from 'vue';
import PdfCanvas from './components/PdfCanvas.vue';

export { default as useFabric } from './hooks/useFabric';
export type * from './types/fabric';
export type * from './types/pdf';

PdfCanvas.install = function (Vue: DefineComponent) {
  Vue.component('PdfCanvas', PdfCanvas);
};

export default PdfCanvas;
