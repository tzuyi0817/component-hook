<script setup lang="ts">
import Demo from '@/components/Demo.vue';
import DrawPdf from '@/examples/pdf-canvas/Draw.vue';
import drawSource from '@/examples/pdf-canvas/Draw.vue?raw';
import EncryptedPdf from '@/examples/pdf-canvas/Encrypted.vue';
import encryptedSource from '@/examples/pdf-canvas/Encrypted.vue?raw';
import MultiplePdf from '@/examples/pdf-canvas/Multiple.vue';
import multipleSource from '@/examples/pdf-canvas/Multiple.vue?raw';
import DropPdf from '@/examples/pdf-canvas/Drop.vue';
import dropSource from '@/examples/pdf-canvas/Drop.vue?raw';
import ManualPdf from '@/examples/pdf-canvas/Manual.vue';
import manualSource from '@/examples/pdf-canvas/Manual.vue?raw';
// import { md } from '@/utils/highlight';
</script>

<template>
  <div class="container">
    <h1>PDF Canvas</h1>

    <p>Rendering PDF documents onto a canvas with vue3 component.</p>

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
      title="Drag and drop images and text"
      :source="dropSource"
    >
      <template #description>Drag and drop the images and text onto the canvas.</template>
      <drop-pdf />
    </demo>

    <demo
      title="Manually add images and text"
      :source="manualSource"
    >
      <template #description>Manually add the images and text onto the canvas.</template>
      <manual-pdf />
    </demo>

    <!-- <div
      class="overflow-x-auto"
      v-html="md.render(attributesMd)"
    ></div>

    <div v-html="md.render(otherMd)"></div> -->
  </div>
</template>
