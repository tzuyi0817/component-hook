<script setup lang="ts">
import { ref } from 'vue';
import SourceCode from '@/components/SourceCode.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { highlight } from '@/utils/highlight';
import { sleep } from '@/utils/common';

interface Props {
  title: string;
  source: string;
}

defineProps<Props>();

const isShowSource = ref(false);
const isDisplaySource = ref(false);

function encode(source: string, isHighlight = true) {
  const code = isHighlight ? highlight(source) : source;

  return encodeURIComponent(code);
}

async function toggleSource() {
  isDisplaySource.value = true;
  await sleep(150);
  isShowSource.value = !isShowSource.value;
}
</script>

<template>
  <div class="demo-wrapper mb-9">
    <h2>{{ title }}</h2>

    <p class="mb-4">
      <slot name="description"></slot>
    </p>

    <div class="example-wrapper border border-border-color rounded">
      <div class="p-6 border-b border-b-border-color">
        <slot></slot>
      </div>

      <div class="px-4 py-3 flex justify-end items-center">
        <svg-icon
          name="source"
          @click="toggleSource"
        />
      </div>
    </div>

    <div
      v-show="isDisplaySource"
      :class="['example-source-wrapper', isShowSource ? 'scale-y-100' : 'scale-y-0']"
      @transitionend="isDisplaySource = isShowSource"
    >
      <source-code :source="encode(source)" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.example-source-wrapper {
  @apply p-4
  bg-code-bg
  transition-all
  origin-top
  border-x
  border-b
  rounded-b
  border-border-color
  overflow-x-auto;
}
</style>
