<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  title: string;
}

defineProps<Props>();

const isShowDescription = ref(false);

function handleMouseEnter() {
  isShowDescription.value = true;
}

function handleMouseLeave() {
  isShowDescription.value = false;
}
</script>

<template>
  <div class="relative">
    <slot
      :handleMouseEnter="handleMouseEnter"
      :handleMouseLeave="handleMouseLeave"
    ></slot>

    <p :class="['describedby', { 'opacity-0': !isShowDescription }]">
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
