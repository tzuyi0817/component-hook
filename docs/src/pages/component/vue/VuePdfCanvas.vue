<script setup lang="ts">
import { DrawPdfRaw, DropPdfRaw, EncryptedPdfRaw, ManualPdfRaw, MultiplePdfRaw } from '@/examples/pdf-canvas';
import eventMd from '@/markdowns/pdf-canvas/vue.md?raw';
import ComponentPdfCanvas from '../components/ComponentPdfCanvas.vue';
</script>

<template>
  <component-pdf-canvas
    front-end-frame="vue3"
    :draw-source="DrawPdfRaw"
    draw-playground="668e33253e8416c068f2f93b"
    :encrypted-source="EncryptedPdfRaw"
    encrypted-playground="66963e7d2b23250eadd65180"
    :multiple-source="MultiplePdfRaw"
    multiple-playground="669646038ae98c93b96a2e78"
    :drop-source="DropPdfRaw"
    drop-playground="6696466d8ae98c93b96a2e9b"
    :manual-source="ManualPdfRaw"
    manual-playground="669646c68ae98c93b96a2eb2"
    :event-md="eventMd"
  />
</template>
