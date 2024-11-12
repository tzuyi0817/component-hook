import type { DefineComponent } from 'vue';
import Picker from './components/Picker.vue';

export type * from '@shared/types/picker';
export type * from '@shared/types/vue-picker';

Picker.install = function (Vue: DefineComponent) {
  Vue.component('Picker', Picker);
};

export default Picker;
