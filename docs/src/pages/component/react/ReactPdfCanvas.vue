<script setup lang="ts">
import drawSource from '@react-playground/pdf-canvas/components/draw-pdf?raw';
import dropSource from '@react-playground/pdf-canvas/components/drop-pdf?raw';
import encryptedSource from '@react-playground/pdf-canvas/components/encrypted-pdf?raw';
import manualSource from '@react-playground/pdf-canvas/components/manual-pdf?raw';
import multipleSource from '@react-playground/pdf-canvas/components/multiple-pdf?raw';
import eventMd from '@/markdowns/pdf-canvas/react.md?raw';
import ComponentPdfCanvas from '../components/ComponentPdfCanvas.vue';
</script>

<template>
  <component-pdf-canvas
    front-end-frame="react"
    :draw-source="drawSource"
    draw-playground="675f9a7a08325367664ebf7a"
    :encrypted-source="encryptedSource"
    encrypted-playground="675f9e9b4b3b90d00991becc"
    :multiple-source="multipleSource"
    multiple-playground="675fbbb198c7cde44e724bae"
    :drop-source="dropSource"
    drop-playground="675fbf06bf0c4e6c39359d60"
    :manual-source="manualSource"
    manual-playground="675fbfdcbf0c4e6c39359d7d"
    language="tsx"
    :event-md="eventMd"
  />
</template>
