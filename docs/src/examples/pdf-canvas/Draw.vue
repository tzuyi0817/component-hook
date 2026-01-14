<script setup lang="ts">
import PdfCanvas, { loadFile, type PDF } from '@component-hook/pdf-canvas/vue';
import { ref } from 'vue';

const currentPdf = ref<PDF>();

async function uploadFile(event: Event) {
  const target = event.target as HTMLInputElement;
  const { files } = target;

  if (!files) return;
  const file = files[0];
  const content = await loadFile(file);

  currentPdf.value = content;
  target.value = '';
}
</script>

<template>
  <div class="flex w-fit flex-col items-center gap-3">
    <pdf-canvas
      v-if="currentPdf"
      :file="currentPdf"
    />

    <p
      v-else
      class="font-mono text-sm"
    >
      Please select a PDF file or image.
    </p>

    <button class="relative">
      <input
        type="file"
        accept="application/pdf, .jpg, .png"
        class="absolute top-0 left-0 h-9 w-23.5 cursor-pointer opacity-0"
        @change="uploadFile"
      />
      select file
    </button>

    <div class="mt-5 flex w-full flex-col gap-1 font-mono text-sm">
      <p>file id: {{ currentPdf?.PDFId ?? 'null' }}</p>
      <p>file name: {{ currentPdf?.name ?? 'null' }}</p>
      <p>total pages: {{ currentPdf?.pages ?? 'null' }}</p>
      <p>update date: {{ currentPdf?.updateDate ?? 'null' }}</p>
    </div>
  </div>
</template>
