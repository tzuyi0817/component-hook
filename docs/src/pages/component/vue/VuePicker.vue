<script setup lang="ts">
import {
  BasePickerRaw,
  BindingPickerRaw,
  CascadePickerRaw,
  CustomizeColumnPickerRaw,
  MultiColumnPickerRaw,
} from '@/examples/picker';
import indexMd from '@/markdowns/picker/vue.md?raw';
import ComponentPicker from '../components/ComponentPicker.vue';
</script>

<template>
  <component-picker
    front-end-frame="vue3"
    :base-source="BasePickerRaw"
    base-playground="668e32b73e8416c068f2f92f"
    :binding-source="BindingPickerRaw"
    binding-playground="669635e2b9ac0e0085f0eb2e"
    :multi-column-source="MultiColumnPickerRaw"
    multi-column-playground="67a32d8d13fe5303ffefe863"
    :cascade-source="CascadePickerRaw"
    cascade-playground="6696355db9ac0e0085f0eb29"
    :customize-column-source="CustomizeColumnPickerRaw"
    customize-column-playground="66963635b9ac0e0085f0eb32"
    :index-md="indexMd"
  />
</template>
