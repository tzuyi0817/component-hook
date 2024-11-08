<script setup lang="ts">
import { ref } from 'vue';
import CopySource from '@/components/CopySource.vue';

interface Props {
  source: string;
  raw: string;
}

defineProps<Props>();
const isShowCopyIcon = ref(false);

function onHoverCode() {
  isShowCopyIcon.value = true;
}

function onLeaveCode() {
  isShowCopyIcon.value = false;
}
</script>

<template>
  <div
    class="source-code-wrapper relative"
    @mouseenter="onHoverCode"
    @mouseleave="onLeaveCode"
  >
    <copy-source
      :source="decodeURIComponent(raw)"
      is-absolute
      :class="['copy-source', { 'pointer-events-none opacity-0': !isShowCopyIcon }]"
    />

    <div
      class="source-code"
      v-html="decodeURIComponent(source)"
    ></div>
  </div>
</template>

<style lang="postcss" scoped>
.copy-source {
  @apply bg-code-bg-color 
  p-0.5 
  rounded 
  transition-opacity 
  duration-300 
  top-3 
  right-3 
  z-10 
  lg:top-4 
  lg:right-4;
}
</style>
