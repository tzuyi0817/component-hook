<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import { DEFAULT_SELECTION_OPTIONS } from '../../shared/constants';
import { useFabric } from '../hooks/use-fabric';
import { useResize } from '../hooks/use-resize';
import type { ComponentProps } from '../../shared/types/common';
import type {
  DropOffset,
  FabricPointerEvent,
  FabricSelectionClearedEvent,
  FabricSelectionCreatedEvent,
} from '../../shared/types/fabric';
import type { ImageProps, TextProps, TOptions } from 'fabric';

interface Emits {
  loaded: [];
  reload: [];
  pointerDown: [event: FabricPointerEvent];
  pointerMove: [event: FabricPointerEvent];
  pointerUp: [event: FabricPointerEvent];
  selectionCreated: [event: FabricSelectionCreatedEvent];
  selectionCleared: [event: FabricSelectionClearedEvent];
}

const props = withDefaults(defineProps<ComponentProps>(), {
  canvasId: 'PDF-canvas',
  canvasClass: '',
  canvasScale: 1,
  page: 1,
  fileZoom: 1,
  fileScale: 1,
  isDrop: false,
  onDestroy: onBeforeUnmount,
});

const emit = defineEmits<Emits>();
const { onDestroy } = props;
const canvasRef = ref<HTMLCanvasElement | null>(null);
const canvasId = `${props.canvasId}-${props.page - 1}`;

const containerScale = computed(() => props.fileZoom * props.canvasScale);
const selectionOptions = computed(() => ({ ...DEFAULT_SELECTION_OPTIONS, ...props.selectionOptions }));

const {
  createCanvas,
  specifyPage,
  addFabric,
  addTextFabric,
  renderImage,
  clearActive,
  deleteCanvas,
  scaleFabric,
  setActiveFabric,
  setCloseSvgOptions,
  copyActiveFabric,
  deleteActiveFabric,
} = useFabric({
  id: canvasId,
  selectionOptions,
  pointerDown: event => emit('pointerDown', event),
  pointerMove: event => emit('pointerMove', event),
  pointerUp: event => emit('pointerUp', event),
  selectionCreated: event => emit('selectionCreated', event),
  selectionCleared: event => emit('selectionCleared', event),
});

setPDF();
useResize(handleReload);

async function setPDF() {
  const { file, page, fileScale: scale } = props;

  globalThis.requestAnimationFrame(async () => {
    await nextTick();
    createCanvas();

    if (file.data?.type.startsWith('image/')) {
      const scaleDown = 3;
      const data = file.data;

      if (data) {
        renderImage({ data, scale: scale / scaleDown });
      }

      emit('loaded');
      return;
    }

    if (file.data) {
      await specifyPage({
        page,
        data: file.data,
        scale,
        password: props.password,
      });
    }

    emit('loaded');
  });
}

function dropImage(event: DragEvent) {
  if (!props.isDrop || !event.dataTransfer) return;
  const { dataTransfer, offsetX, offsetY } = event;
  const text = dataTransfer.getData('text/plain');
  const imageSrc = dataTransfer.getData('text/uri-list');
  const customOffset = dataTransfer.getData('custom/offset');
  const offset = customOffset ? JSON.parse(customOffset) : null;
  const options = { top: offsetY, left: offsetX };
  const dropOffset = { x: offset?.offsetX ?? 0, y: offset?.offsetY ?? 0 };

  if (imageSrc) {
    addImage(imageSrc, options, dropOffset);
  } else if (text) {
    addText(text, options, dropOffset);
  }
}

function addImage(src: string, options?: TOptions<ImageProps>, offset?: DropOffset) {
  addFabric(src, { ...props.dropImageOptions, ...options }, offset);
}

function addText(text: string, options?: TOptions<TextProps>, offset?: DropOffset) {
  addTextFabric(text, { ...props.dropTextOptions, ...options }, offset);
}

function handleReload() {
  if (!props.manualReload) setPDF();

  emit('reload');
}

watch([() => props.fileScale, () => props.page, () => props.file, () => props.password], handleReload);
watch(containerScale, scale => scaleFabric(scale), { immediate: true });
watch(() => props.closeSvgOptions, setCloseSvgOptions, { immediate: true });
onDestroy(deleteCanvas);
defineExpose({
  reload: setPDF,
  addImage,
  addText,
  clearActive,
  deleteCanvas,
  setActiveFabric,
  copyActiveFabric,
  deleteActiveFabric,
  canvasRef,
});
</script>

<template>
  <div
    :style="{ transform: `scale(${containerScale})` }"
    @dragover.prevent
    @dragenter.prevent
    @drop.stop.prevent="dropImage"
  >
    <canvas
      :id="canvasId"
      ref="canvasRef"
      :class="canvasClass"
    ></canvas>
  </div>
</template>
