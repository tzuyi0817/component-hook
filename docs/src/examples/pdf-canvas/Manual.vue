<script setup lang="ts">
import PdfCanvas, { loadFile, type PDF } from '@component-hook/pdf-canvas/vue';
import { ref } from 'vue';

const currentPdf = ref<PDF>();
const pdfCanvasRef = ref<InstanceType<typeof PdfCanvas> | null>(null);

async function uploadFile(event: Event) {
  const target = event.target as HTMLInputElement;
  const { files } = target;

  if (!files) return;
  const file = files[0];
  const content = await loadFile(file);

  currentPdf.value = content;
  target.value = '';
}

function addImage() {
  if (!pdfCanvasRef.value) return;

  pdfCanvasRef.value.addImage('https://pdf-signature-puce.vercel.app/cover.jpg');
}

function addText() {
  if (!pdfCanvasRef.value) return;

  pdfCanvasRef.value.addText('Can drag the text onto canvas.');
}
</script>

<template>
  <div class="flex w-fit flex-col items-center gap-3">
    <pdf-canvas
      v-if="currentPdf"
      ref="pdfCanvasRef"
      :file="currentPdf"
      canvas-id="manual"
      :drop-image-options="{ scaleX: 0.1, scaleY: 0.1 }"
      :drop-text-options="{ fontSize: 20 }"
      is-drop
    />

    <p
      v-else
      class="font-mono text-sm"
    >
      Please select a PDF file or image.
    </p>

    <div class="flex flex-wrap gap-3">
      <button class="relative">
        <input
          type="file"
          accept="application/pdf, .jpg, .png"
          class="absolute top-0 left-0 h-[36px] w-[94px] cursor-pointer opacity-0"
          @change="uploadFile"
        />
        select file
      </button>

      <button @click="addImage">add image</button>
      <button @click="addText">add text</button>
    </div>
  </div>
</template>
