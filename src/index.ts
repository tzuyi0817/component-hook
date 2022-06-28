import Picker from '@/components/Picker.vue';
import { DefineComponent } from 'vue';
import type { PickerEmit, PickerProps, PickerOptions } from '@/types';

Picker.install = function (Vue: DefineComponent) {
  Vue.component('Picker', Picker);
};

export {
  Picker,
  PickerEmit,
  PickerProps,
  PickerOptions,
};
