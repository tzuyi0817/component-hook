<script setup lang="ts">
import Demo from '@/components/Demo.vue';
import DrawPdf from '@/examples/pdf-canvas/Draw.vue';
import drawSource from '@/examples/pdf-canvas/Draw.vue?raw';
import EncryptedPdf from '@/examples/pdf-canvas/Encrypted.vue';
import encryptedSource from '@/examples/pdf-canvas/Encrypted.vue?raw';
import MultiplePdf from '@/examples/pdf-canvas/Multiple.vue';
import multipleSource from '@/examples/pdf-canvas/Multiple.vue?raw';
import DropImage from '@/examples/pdf-canvas/DropImage.vue';
import dropImageSource from '@/examples/pdf-canvas/DropImage.vue?raw';
// import { md } from '@/utils/highlight';
</script>

<template>
  <div class="container">
    <h1>PDF Canvas</h1>

    <p>PDF to canvas component with vue3.</p>

    <!-- <div v-html="md.render(installationMd)"></div> -->

    <demo
      title="Basic Usage"
      :source="drawSource"
    >
      <template #description>Select the PDF file and draw on the canvas.</template>
      <draw-pdf />
    </demo>

    <demo
      title="Encrypted PDF"
      :source="encryptedSource"
    >
      <template #description>Select the encrypted PDF file and draw on the canvas.</template>
      <encrypted-pdf />
    </demo>

    <demo
      title="Multiple page PDF"
      :source="multipleSource"
    >
      <template #description>Select the multiple page PDF file and draw on the canvas.</template>
      <multiple-pdf />
    </demo>

    <demo
      title="Drag and drop image"
      :source="dropImageSource"
    >
      <template #description>Drag and drop the image onto the canvas.</template>
      <drop-image />
    </demo>

    <!-- <div
      class="overflow-x-auto"
      v-html="md.render(attributesMd)"
    ></div>

    <div v-html="md.render(otherMd)"></div> -->
  </div>
</template>
