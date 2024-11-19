<script setup lang="ts">
import drawSource from '@react-playground/pdf-canvas/draw-pdf?raw';
import encryptedSource from '@react-playground/pdf-canvas/encrypted-pdf?raw';
import multipleSource from '@react-playground/pdf-canvas/multiple-pdf?raw';
import dropSource from '@react-playground/pdf-canvas/drop-pdf?raw';
import manualSource from '@react-playground/pdf-canvas/manual-pdf?raw';
import ComponentPdfCanvas from '../ComponentPdfCanvas.vue';
</script>

<template>
  <component-pdf-canvas
    description="Rendering PDF documents onto a canvas with react component."
    :draw-source="drawSource"
    draw-playground=""
    :encrypted-source="encryptedSource"
    encrypted-playground=""
    :multiple-source="multipleSource"
    multiple-playground=""
    :drop-source="dropSource"
    drop-playground=""
    :manual-source="manualSource"
    manual-playground=""
    language="tsx"
  />
</template>
