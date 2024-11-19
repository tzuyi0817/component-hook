<script setup lang="ts">
import Demo from '@/components/Demo.vue';
import ExternalLink from '@/components/ExternalLink.vue';
import DrawPdf from '@/examples/pdf-canvas/Draw.vue';
import EncryptedPdf from '@/examples/pdf-canvas/Encrypted.vue';
import MultiplePdf from '@/examples/pdf-canvas/Multiple.vue';
import DropPdf from '@/examples/pdf-canvas/Drop.vue';
import ManualPdf from '@/examples/pdf-canvas/Manual.vue';
import installationMd from '@/markdowns/pdf-canvas/installation.md?raw';
import attributesMd from '@/markdowns/pdf-canvas/attributes.md?raw';
import exposesMd from '@/markdowns/pdf-canvas/exposes.md?raw';
import useFabricMd from '@/markdowns/pdf-canvas/useFabric.md?raw';
import { md } from '@/utils/highlight';

interface Props {
  description: string;
  drawSource: string;
  drawPlayground: string;
  encryptedSource: string;
  encryptedPlayground: string;
  multipleSource: string;
  multiplePlayground: string;
  dropSource: string;
  dropPlayground: string;
  manualSource: string;
  manualPlayground: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <h2>PDF Canvas</h2>

    <p>{{ description }}</p>
    <p>
      Implementation repository:
      <external-link
        href="https://github.com/tzuyi0817/PDF-signature"
        title="PDF-signature GitHub Page"
      >
        PDF-signature
      </external-link>
    </p>

    <div v-html="md.render(installationMd)"></div>

    <demo
      title="Basic Usage"
      :source="drawSource"
      :playground="drawPlayground"
    >
      <template #description> Select the PDF file and draw on the canvas. </template>
      <draw-pdf />
    </demo>

    <demo
      title="Encrypted PDF"
      :source="encryptedSource"
      :playground="encryptedPlayground"
    >
      <template #description> Select the encrypted PDF file and draw on the canvas. </template>
      <encrypted-pdf />
    </demo>

    <demo
      title="Multiple page PDF"
      :source="multipleSource"
      :playground="multiplePlayground"
    >
      <template #description> Select the multiple page PDF file and draw on the canvas. </template>
      <multiple-pdf />
    </demo>

    <demo
      title="Drag and drop images and text"
      :source="dropSource"
      :playground="dropPlayground"
    >
      <template #description> Drag and drop the images and text onto the canvas. </template>
      <drop-pdf />
    </demo>

    <demo
      title="Manually add images and text"
      :source="manualSource"
      :playground="manualPlayground"
    >
      <template #description> Manually add the images and text onto the canvas. </template>
      <manual-pdf />
    </demo>

    <div
      class="overflow-x-auto"
      v-html="md.render(attributesMd)"
    ></div>

    <div
      class="overflow-x-auto"
      v-html="md.render(exposesMd)"
    ></div>

    <div
      class="overflow-x-auto"
      v-html="md.render(useFabricMd)"
    ></div>
  </div>
</template>
