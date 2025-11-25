<script lang="ts" setup>
import { v4 } from 'uuid';
import { ref } from 'vue';
import { sleep } from '@/utils/common';

interface Props {
  title?: string;
  isAbsolute?: boolean;
}

defineOptions({ name: 'Describedby' });

const { title } = defineProps<Props>();
const isShowDescription = ref(false);
const isDisplayDescription = ref(false);
const id = v4();
let timer: ReturnType<typeof setTimeout> | null = null;

async function handleMouseEnter() {
  if (!title) return;

  cleanupTimer();
  isDisplayDescription.value = true;
  await sleep(0);
  isShowDescription.value = true;
}

async function handleMouseLeave() {
  if (!title) return;

  cleanupTimer();
  isShowDescription.value = false;

  timer = setTimeout(() => {
    isDisplayDescription.value = false;
  }, 300);
}

function cleanupTimer() {
  if (!timer) return;

  clearTimeout(timer);
  timer = null;
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

<style lang="css" scoped>
.describedby {
  background-color: var(--describedby-bg-color);
  color: var(--describedby-text-color);
  font-size: 12px;
  line-height: calc(1 / 0.75);
  padding: 8px 12px;
  border-radius: 4px;
  position: absolute;
  white-space: nowrap;
  left: 50%;
  top: -4px;
  transform: translateX(-50%) translateY(100%);
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: 10;
}
</style>
