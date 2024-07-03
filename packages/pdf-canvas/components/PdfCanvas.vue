<script setup lang="ts">
import { ref, nextTick, watch, computed, onBeforeUnmount } from 'vue';
import type { ImageProps, TextProps, TOptions } from 'fabric';
import useFabric from '../hooks/useFabric';
import type { PDF } from '../types/pdf';

interface Props {
  file: PDF;
  page?: number;
  canvasId?: string;
  fileZoom?: number;
  fileScale?: number;
  canvasScale?: number;
  canvasClass?: string;
  isDrop?: boolean;
  password?: string;
  dropTextOptions?: TOptions<TextProps>;
  dropImageOptions?: TOptions<ImageProps>;
}

const props = withDefaults(defineProps<Props>(), {
  canvasId: 'PDF-canvas',
  class: '',
  canvasClass: '',
  canvasScale: 1,
  page: 1,
  fileZoom: 1,
  fileScale: 1,
  isDrop: false,
});

const canvasDom = ref<HTMLCanvasElement | null>(null);
const canvasId = `${props.canvasId}-${props.page - 1}`;
const containerScale = computed(() => props.fileZoom * props.canvasScale);
const {
  createCanvas,
  specifyPage,
  addFabric,
  addTextFabric,
  renderImage,
  clearActive,
  deleteCanvas,
  scaleCloseFabric,
} = useFabric(canvasId);

setPDF();

async function setPDF() {
  const { file, page, fileScale: scale } = props;

  window.requestAnimationFrame(async () => {
    await nextTick();
    createCanvas();
    if (file.PDFBase64.startsWith('data:image') || file.canvas) {
      const { canvas } = file;
      const scaleDown = canvas ? 7 : 3;
      const url = canvas?.length ? canvas[page - 1] : file.PDFBase64;

      renderImage({ url, scale: scale / scaleDown });
      return;
    }
    await specifyPage({ page, PDFBase64: file.PDFBase64, scale, password: props.password });
  });
}

function dropImage(event: DragEvent) {
  if (!props.isDrop || !event.dataTransfer) return;
  const { dataTransfer, offsetX, offsetY } = event;
  const text = dataTransfer.getData('text');
  const imageSrc = dataTransfer.getData('image');
  const position = { left: offsetX - 71, top: offsetY - 55 };

  if (imageSrc) addImage(imageSrc, position);
  if (text) addText(text, position);
}

function addImage(src: string, options?: TOptions<ImageProps>) {
  addFabric(src, { ...options, ...props.dropImageOptions });
}

function addText(text: string, options?: TOptions<TextProps>) {
  addTextFabric(text, { ...options, ...props.dropTextOptions });
}

watch([() => props.fileScale, () => props.page, () => props.file, () => props.password], setPDF);
watch(containerScale, scale => scaleCloseFabric(scale), { immediate: true });
onBeforeUnmount(deleteCanvas);
defineExpose({ addImage, addText, clearActive, deleteCanvas, canvasDom });
</script>

<template>
  <div
    :style="{ transform: `scale(${containerScale})` }"
    @dragover.stop.prevent
    @dragenter.stop.prevent
    @drop.stop.prevent="dropImage"
  >
    <canvas
      :id="canvasId"
      ref="canvasDom"
      :class="canvasClass"
    ></canvas>
  </div>
</template>
