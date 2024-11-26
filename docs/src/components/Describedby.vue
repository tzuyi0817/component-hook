<script lang="ts" setup>
import { ref } from 'vue';
import { v4 } from 'uuid';
import { sleep } from '@/utils/common';

interface Props {
  title?: string;
  isAbsolute?: boolean;
}

const { title } = defineProps<Props>();
const isShowDescription = ref(false);
const isDisplayDescription = ref(false);
const id = v4();

async function handleMouseEnter() {
  if (!title) return;

  isDisplayDescription.value = true;
  await sleep(0);
  isShowDescription.value = true;
}

async function handleMouseLeave() {
  if (!title) return;

  isShowDescription.value = false;
  await sleep();
  isDisplayDescription.value = false;
}
</script>

<template>
  <div
    :class="[isAbsolute ? 'absolute' : 'relative']"
    :aria-describedby="isDisplayDescription ? id : undefined"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot></slot>

    <p
      v-if="isDisplayDescription"
      :id="id"
      :class="['describedby', { 'opacity-0': !isShowDescription }]"
    >
      {{ title }}
    </p>
  </div>
</template>

<style lang="postcss" scoped>
.describedby {
  @apply bg-[var(--describedby-bg-color)] 
  text-[var(--describedby-text-color)] 
  text-xs 
  px-3
  py-2 
  rounded 
  absolute 
  whitespace-nowrap
  left-1/2
  -top-1
  -translate-x-1/2
  translate-y-full
  transition-opacity
  duration-300
  pointer-events-none
  z-10;
}
</style>
