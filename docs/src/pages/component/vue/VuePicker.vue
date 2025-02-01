<script setup lang="ts">
import ComponentPicker from '@/components/component/ComponentPicker.vue';
import baseSource from '@/examples/picker/Base.vue?raw';
import bindingSource from '@/examples/picker/Binding.vue?raw';
import multiColumnSource from '@/examples/picker/MultiColumn.vue?raw';
import cascadeSource from '@/examples/picker/Cascade.vue?raw';
import singleSource from '@/examples/picker/Single.vue?raw';
import indexMd from '@/markdowns/picker/vue.md?raw';
</script>

<template>
  <component-picker
    front-end-frame="vue3"
    :base-source="baseSource"
    base-playground=""
    :binding-source="bindingSource"
    binding-playground=""
    :multi-column-source="multiColumnSource"
    multi-column-playground=""
    :cascade-source="cascadeSource"
    cascade-playground="6696355db9ac0e0085f0eb29"
    :single-source="singleSource"
    single-playground="668e32b73e8416c068f2f92f"
    :index-md="indexMd"
  />
</template>
