<script setup lang="ts">
import ComponentPdfCanvas from '@/components/component/ComponentPdfCanvas.vue';
import drawSource from '@/examples/pdf-canvas/Draw.vue?raw';
import dropSource from '@/examples/pdf-canvas/Drop.vue?raw';
import encryptedSource from '@/examples/pdf-canvas/Encrypted.vue?raw';
import manualSource from '@/examples/pdf-canvas/Manual.vue?raw';
import multipleSource from '@/examples/pdf-canvas/Multiple.vue?raw';
import eventMd from '@/markdowns/pdf-canvas/vue.md?raw';
</script>

<template>
  <component-pdf-canvas
    front-end-frame="vue3"
    :draw-source="drawSource"
    draw-playground="668e33253e8416c068f2f93b"
    :encrypted-source="encryptedSource"
    encrypted-playground="66963e7d2b23250eadd65180"
    :multiple-source="multipleSource"
    multiple-playground="669646038ae98c93b96a2e78"
    :drop-source="dropSource"
    drop-playground="6696466d8ae98c93b96a2e9b"
    :manual-source="manualSource"
    manual-playground="669646c68ae98c93b96a2eb2"
    :event-md="eventMd"
  />
</template>
