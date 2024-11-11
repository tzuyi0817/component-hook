<script lang="ts" setup>
import { ref, watch, useTemplateRef } from 'vue';

interface Props {
  isShow: boolean;
}

const { isShow } = defineProps<Props>();
const collapseRef = useTemplateRef<HTMLDivElement>('collapse');
const isDisplayCollapse = ref(isShow);

function showCollapse(element: HTMLDivElement) {
  isDisplayCollapse.value = true;
  element.dataset.overflow = element.style.overflow;
  element.style.maxHeight = '0';

  window.requestAnimationFrame(() => {
    element.style.maxHeight = `${element.scrollHeight}px`;
    element.style.overflow = 'hidden';
  });
}

function closeCollapse(element: HTMLDivElement) {
  element.dataset.overflow = element.style.overflow;
  element.style.maxHeight = `${element.scrollHeight}px`;

  window.requestAnimationFrame(() => {
    element.style.maxHeight = '0';
    element.style.overflow = 'hidden';
  });
}

function onTransitionend(event: TransitionEvent) {
  if (event.propertyName !== 'max-height') return;
  const element = event.target as HTMLDivElement;

  element.style.maxHeight = '';
  element.style.overflow = element.dataset.overflow ?? '';
  isDisplayCollapse.value = isShow;
}

watch(
  () => isShow,
  value => {
    if (!collapseRef.value) return;

    if (value) {
      showCollapse(collapseRef.value);
    } else {
      closeCollapse(collapseRef.value);
    }
  },
);
</script>

<template>
  <div
    v-show="isDisplayCollapse"
    ref="collapse"
    class="collapse-wrapper"
    @transitionend="onTransitionend"
  >
    <slot></slot>
  </div>
</template>

<style lang="postcss" scoped>
.collapse-wrapper {
  @apply transition-[max-height] duration-300;
}
</style>
