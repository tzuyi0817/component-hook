<script setup lang="ts">
import { ref } from 'vue';
import PdfCanvas, { useFabric, type PDF } from '@component-hook/pdf-canvas/vue';

const { loadFile } = useFabric();
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
  <div class="w-fit flex flex-col items-center gap-3">
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

    <div class="flex gap-3 flex-wrap">
      <button class="relative">
        <input
          type="file"
          accept="application/pdf, .jpg, .png"
          class="opacity-0 top-0 left-0 absolute w-[94px] h-[36px] cursor-pointer"
          @change="uploadFile"
        />
        select file
      </button>

      <button @click="addImage">add image</button>
      <button @click="addText">add text</button>
    </div>
  </div>
</template>
