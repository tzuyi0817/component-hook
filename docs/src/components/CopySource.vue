<script lang="ts" setup>
import { ref } from 'vue';
import Describedby from '@/components/Describedby.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { copyToClipboard, sleep } from '@/utils/common';

interface Props {
  source: string;
  isAbsolute?: boolean;
  title?: string;
}

const props = defineProps<Props>();
const isCopied = ref(false);

async function copySource() {
  if (isCopied.value) return;

  await copyToClipboard(props.source);
  isCopied.value = true;

  await sleep(1500);
  isCopied.value = false;
}
</script>

<template>
  <describedby
    :title="title"
    :is-absolute="isAbsolute"
    :aria-label="title"
  >
    <svg-icon
      name="copy"
      class="w-4 h-4"
      role="button"
      @click="copySource"
    />

    <span :class="['copy-prompt opacity-0', { 'opacity-100 -translate-y-3': isCopied }]"> Copied! </span>
  </describedby>
</template>

<style lang="css" scoped>
.copy-prompt {
  position: absolute;
  top: -16px;
  left: 50%;
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: calc(1 / 0.75);
  transform: translateX(-50%);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  user-select: none;
}
</style>
