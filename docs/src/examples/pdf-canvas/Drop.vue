<script setup lang="ts">
import { ref } from 'vue';
import PdfCanvas, { loadFile, type PDF } from '@component-hook/pdf-canvas/vue';

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

function dragImage(event: DragEvent) {
  const { src, offsetHeight, offsetWidth } = event.target as HTMLImageElement;
  const offsetX = event.offsetX / offsetWidth;
  const offsetY = event.offsetY / offsetHeight;

  event.dataTransfer?.setData('text/uri-list', src);
  event.dataTransfer?.setData('custom/offset', JSON.stringify({ offsetX, offsetY }));
}

function dragText(event: DragEvent) {
  const { textContent, offsetHeight, offsetWidth } = event.target as HTMLParagraphElement;
  const offsetX = event.offsetX / offsetWidth;
  const offsetY = event.offsetY / offsetHeight;

  event.dataTransfer?.setData('text/plain', textContent ?? '');
  event.dataTransfer?.setData('custom/offset', JSON.stringify({ offsetX, offsetY }));
}
</script>

<template>
  <div class="w-fit flex flex-col items-center gap-3">
    <img
      src="https://pdf-signature-puce.vercel.app/cover.jpg"
      width="300"
      height="200"
      alt="PDF signature cover image"
      @dragstart="dragImage"
    />

    <p
      class="font-mono text-sm my-5 bg-code-bg-color p-2 rounded-md cursor-move"
      draggable="true"
      @dragstart="dragText"
    >
      Can drag the text onto canvas.
    </p>

    <pdf-canvas
      v-if="currentPdf"
      :file="currentPdf"
      canvas-id="drop"
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

    <button class="relative">
      <input
        type="file"
        accept="application/pdf, .jpg, .png"
        class="opacity-0 top-0 left-0 absolute w-[94px] h-[36px] cursor-pointer"
        @change="uploadFile"
      />
      select file
    </button>
  </div>
</template>
