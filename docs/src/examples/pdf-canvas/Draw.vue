<script setup lang="ts">
import { ref } from 'vue';
import PdfCanvas, { useFabric, type PDF } from '@component-hook/pdf-canvas/vue';

const { loadFile } = useFabric();
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
  <div class="w-fit flex flex-col items-center gap-3">
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
        class="opacity-0 top-0 left-0 absolute w-[94px] h-[36px] cursor-pointer"
        @change="uploadFile"
      />
      select file
    </button>

    <div class="font-mono text-sm w-full flex flex-col gap-1 mt-5">
      <p>
        base64:
        {{ currentPdf?.PDFBase64 ? `${currentPdf.PDFBase64.slice(0, 30)}...` : 'null' }}
      </p>
      <p>file id: {{ currentPdf?.PDFId ?? 'null' }}</p>
      <p>file name: {{ currentPdf?.name ?? 'null' }}</p>
      <p>total pages: {{ currentPdf?.pages ?? 'null' }}</p>
      <p>update date: {{ currentPdf?.updateDate ?? 'null' }}</p>
    </div>
  </div>
</template>
