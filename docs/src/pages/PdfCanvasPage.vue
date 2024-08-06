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
import installationMd from '@/markdowns/pdf-canvas/installation.md?raw';
import attributesMd from '@/markdowns/pdf-canvas/attributes.md?raw';
import exposesMd from '@/markdowns/pdf-canvas/exposes.md?raw';
import useFabricMd from '@/markdowns/pdf-canvas/useFabric.md?raw';
import { md } from '@/utils/highlight';
</script>

<template>
  <div class="container">
    <h1>PDF Canvas</h1>

    <p>Rendering PDF documents onto a canvas with vue3 component.</p>
    <p>
      Implementation repository:
      <a
        href="https://github.com/tzuyi0817/PDF-signature"
        class="link"
        target="_blank"
        rel="noopener noreferrer"
      >PDF-signature</a>
    </p>

    <div v-html="md.render(installationMd)"></div>

    <demo
      title="Basic Usage"
      :source="drawSource"
      playground="668e33253e8416c068f2f93b"
    >
      <template #description>
        Select the PDF file and draw on the canvas.
      </template>
      <draw-pdf />
    </demo>

    <demo
      title="Encrypted PDF"
      :source="encryptedSource"
      playground="66963e7d2b23250eadd65180"
    >
      <template #description>
        Select the encrypted PDF file and draw on the canvas.
      </template>
      <encrypted-pdf />
    </demo>

    <demo
      title="Multiple page PDF"
      :source="multipleSource"
      playground="669646038ae98c93b96a2e78"
    >
      <template #description>
        Select the multiple page PDF file and draw on the canvas.
      </template>
      <multiple-pdf />
    </demo>

    <demo
      title="Drag and drop images and text"
      :source="dropSource"
      playground="6696466d8ae98c93b96a2e9b"
    >
      <template #description>
        Drag and drop the images and text onto the canvas.
      </template>
      <drop-pdf />
    </demo>

    <demo
      title="Manually add images and text"
      :source="manualSource"
      playground="669646c68ae98c93b96a2eb2"
    >
      <template #description>
        Manually add the images and text onto the canvas.
      </template>
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
