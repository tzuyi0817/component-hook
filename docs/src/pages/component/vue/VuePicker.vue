<script setup lang="ts">
import ComponentPicker from '@/components/component/ComponentPicker.vue';
import baseSource from '@/examples/picker/Base.vue?raw';
import bindingSource from '@/examples/picker/Binding.vue?raw';
import cascadeSource from '@/examples/picker/Cascade.vue?raw';
import customizeColumnSource from '@/examples/picker/CustomizeColumn.vue?raw';
import multiColumnSource from '@/examples/picker/MultiColumn.vue?raw';
import indexMd from '@/markdowns/picker/vue.md?raw';
</script>

<template>
  <component-picker
    front-end-frame="vue3"
    :base-source="baseSource"
    base-playground="668e32b73e8416c068f2f92f"
    :binding-source="bindingSource"
    binding-playground="669635e2b9ac0e0085f0eb2e"
    :multi-column-source="multiColumnSource"
    multi-column-playground="67a32d8d13fe5303ffefe863"
    :cascade-source="cascadeSource"
    cascade-playground="6696355db9ac0e0085f0eb29"
    :customize-column-source="customizeColumnSource"
    customize-column-playground="66963635b9ac0e0085f0eb32"
    :index-md="indexMd"
  />
</template>
