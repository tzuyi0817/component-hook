<script lang="ts" setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';
import Describedby from '@/components/Describedby.vue';
import { sleep } from '@/utils/common';

interface Props {
  source: string;
  isAbsolute?: boolean;
  title?: string;
}

const props = defineProps<Props>();
const isCopied = ref(false);

async function copySource() {
  if (isCopied.value) return;

  navigator.clipboard.writeText(props.source);
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
      role="button"
      @click="copySource"
    />

    <span :class="['copy-prompt opacity-0', { 'opacity-100 -translate-y-3': isCopied }]"> Copied! </span>
  </describedby>
</template>

<style lang="postcss" scoped>
.copy-prompt {
  @apply absolute
  -top-4
  left-1/2
  font-mono
  text-xs
  -translate-x-1/2
  transition-all
  pointer-events-none
  select-none
  duration-300;
}
</style>
