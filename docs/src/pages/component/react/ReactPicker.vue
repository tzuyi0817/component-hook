<script setup lang="ts">
import customizeColumnSource from '@react-playground//picker/customize-column?raw';
import baseSource from '@react-playground/picker/base?raw';
import cascadeSource from '@react-playground/picker/cascade?raw';
import multiColumnSource from '@react-playground/picker/multi-column?raw';
import indexMd from '@/markdowns/picker/react.md?raw';
import ComponentPicker from '../components/ComponentPicker.vue';
</script>

<template>
  <component-picker
    front-end-frame="react"
    :base-source="baseSource"
    base-playground="675aad63c39ce4f761bd8622"
    :multi-column-source="multiColumnSource"
    multi-column-playground="675aae60c39ce4f761bd8637"
    :cascade-source="cascadeSource"
    cascade-playground="67569e8087493a239347d7ce"
    :customize-column-source="customizeColumnSource"
    customize-column-playground="675aae0cc39ce4f761bd8633"
    :index-md="indexMd"
    language="tsx"
  />
</template>
