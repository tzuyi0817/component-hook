<script lang="ts" setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { sleep } from '@/utils/common';

interface Props {
  source: string;
  isAbsolute?: boolean;
}

const props = defineProps<Props>();
const isCopied = ref(false);

async function copySource() {
  navigator.clipboard.writeText(props.source);
  isCopied.value = true;
  await sleep(1500);
  isCopied.value = false;
}
</script>

<template>
  <div
    :class="[isAbsolute ? 'absolute' : 'relative']"
    @click="copySource"
  >
    <svg-icon name="copy" />
    <span :class="['copy-prompt opacity-0', { 'opacity-100 -translate-y-3': isCopied }]"> Copied! </span>
  </div>
</template>

<style lang="postcss" scoped>
.copy-prompt {
  @apply absolute
  -top-5
  left-1/2
  font-mono
  text-sm
  -translate-x-1/2
  transition-all
  pointer-events-none
  duration-300;
}
</style>
