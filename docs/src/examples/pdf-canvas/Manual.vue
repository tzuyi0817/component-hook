<script setup lang="ts">
import PdfCanvas, { loadFile, type FabricOverlay, type PDF } from '@component-hook/pdf-canvas/vue';
import { computed, onBeforeUnmount, ref, watch } from 'vue';

const currentPdf = ref<PDF>();
const overlay = ref<FabricOverlay | null>();
const pdfCanvasRef = ref<InstanceType<typeof PdfCanvas> | null>(null);

const overlayUrl = computed(() => (overlay.value ? URL.createObjectURL(overlay.value.blob) : ''));

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

  pdfCanvasRef.value.addImage('https://pdf-signature-puce.vercel.app/cover.jpg', { crossOrigin: 'anonymous' });
}

function addText() {
  if (!pdfCanvasRef.value) return;

  pdfCanvasRef.value.addText('Can drag the text onto canvas.');
}

async function exportOverlay() {
  if (!pdfCanvasRef.value) return;

  overlay.value = await pdfCanvasRef.value.exportOverlay({ dpi: 150 });
}

function toPercent(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}

watch(overlayUrl, (_, url) => URL.revokeObjectURL(url));

onBeforeUnmount(() => URL.revokeObjectURL(overlayUrl.value));
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
          class="absolute top-0 left-0 h-9 w-23.5 cursor-pointer opacity-0"
          @change="uploadFile"
        />
        select file
      </button>

      <button @click="addImage">add image</button>
      <button @click="addText">add text</button>
      <button @click="exportOverlay">export overlay</button>
    </div>

    <template v-if="overlay">
      <img
        :src="overlayUrl"
        class="max-w-full border border-dashed"
        alt="Exported overlay"
      />

      <p class="font-mono text-sm">
        x: {{ toPercent(overlay.x) }}, y: {{ toPercent(overlay.y) }}, width: {{ toPercent(overlay.width) }}, height:
        {{ toPercent(overlay.height) }}
      </p>
    </template>

    <p
      v-else-if="overlay === null"
      class="font-mono text-sm"
    >
      There is nothing to export.
    </p>
  </div>
</template>
