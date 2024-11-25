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
  <div
    :class="[isAbsolute ? 'absolute' : 'relative']"
    :aria-label="title"
  >
    <describedby
      v-if="title"
      :title="title"
      v-slot="{ handleMouseEnter, handleMouseLeave }"
    >
      <svg-icon
        name="copy"
        role="button"
        @click="copySource"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      />
    </describedby>

    <svg-icon
      v-else
      name="copy"
      role="button"
      @click="copySource"
    />
    <span :class="['copy-prompt opacity-0', { 'opacity-100 -translate-y-3': isCopied }]"> Copied! </span>
  </div>
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
