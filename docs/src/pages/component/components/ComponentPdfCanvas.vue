<script setup lang="ts">
import { Demo, ExternalLink } from '@/components/common';
import { DrawPdf, DropPdf, EncryptedPdf, ManualPdf, MultiplePdf } from '@/examples/pdf-canvas';
import apiMd from '@/markdowns/pdf-canvas/api.md?raw';
import installationMd from '@/markdowns/pdf-canvas/installation.md?raw';
import { md } from '@/utils/highlight';

interface Props {
  frontEndFrame: string;
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
  language?: string;
  eventMd: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <h2>PDF Canvas</h2>

    <p class="leading-8">
      Rendering <code>PDF</code> documents onto a canvas with <code>{{ frontEndFrame }}</code> component.
    </p>
    <p
      v-if="frontEndFrame === 'vue3'"
      class="leading-8"
    >
      Implementation repository:
      <external-link
        href="https://github.com/tzuyi0817/PDF-signature"
        title="PDF-signature GitHub Page"
      >
        <code>PDF-signature</code>
      </external-link>
    </p>

    <div v-html="md.render(installationMd)"></div>

    <demo
      title="Basic Usage"
      :source="drawSource"
      :playground="drawPlayground"
      :language="language"
    >
      <template #description> Select the <code>PDF</code> file and draw on the <code>canvas</code>. </template>
      <draw-pdf />
    </demo>

    <demo
      title="Encrypted PDF"
      :source="encryptedSource"
      :playground="encryptedPlayground"
      :language="language"
    >
      <template #description>
        Select the encrypted <code>PDF</code> file and draw on the <code>canvas</code>.
      </template>
      <encrypted-pdf />
    </demo>

    <demo
      title="Multiple page PDF"
      :source="multipleSource"
      :playground="multiplePlayground"
      :language="language"
    >
      <template #description>
        Select the multiple page <code>PDF</code> file and draw on the <code>canvas</code>.
      </template>
      <multiple-pdf />
    </demo>

    <demo
      title="Drag and drop images and text"
      :source="dropSource"
      :playground="dropPlayground"
      :language="language"
    >
      <template #description> Drag and drop the images and text onto the <code>canvas</code>. </template>
      <drop-pdf />
    </demo>

    <demo
      title="Manually add images and text"
      :source="manualSource"
      :playground="manualPlayground"
      :language="language"
    >
      <template #description> Manually add the images and text onto the <code>canvas</code>. </template>
      <manual-pdf />
    </demo>

    <h3>API</h3>
    <div v-html="md.render(apiMd)"></div>
    <div v-html="md.render(eventMd)"></div>
  </div>
</template>
