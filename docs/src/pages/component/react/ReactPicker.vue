<script setup lang="ts">
import baseSource from '@react-playground/picker/base?raw';
import multiColumnSource from '@react-playground/picker/multi-column?raw';
import cascadeSource from '@react-playground/picker/cascade?raw';
import customizeColumnSource from '@react-playground//picker/customize-column?raw';
import ComponentPicker from '@/components/component/ComponentPicker.vue';
import indexMd from '@/markdowns/picker/react.md?raw';
</script>

<template>
  <component-picker
    front-end-frame="react"
    :base-source="baseSource"
    base-playground=""
    :multi-column-source="multiColumnSource"
    multi-column-playground=""
    :cascade-source="cascadeSource"
    cascade-playground="6696355db9ac0e0085f0eb29"
    :customize-column-source="customizeColumnSource"
    customize-column-playground="668e32b73e8416c068f2f92f"
    :index-md="indexMd"
    language="tsx"
  />
</template>
