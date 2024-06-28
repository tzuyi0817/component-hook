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

const props = defineProps<Props>();
const isShowSource = ref(false);
const isDisplaySource = ref(false);
const isCopied = ref(false);

function encode(source: string, isHighlight = true) {
  const code = isHighlight ? highlight(source) : source;

  return encodeURIComponent(code);
}

async function toggleSource() {
  isDisplaySource.value = true;
  await sleep(150);
  isShowSource.value = !isShowSource.value;
}

async function copySource() {
  navigator.clipboard.writeText(props.source);
  isCopied.value = true;
  await sleep(1500);
  isCopied.value = false;
}
</script>

<template>
  <div class="demo-wrapper">
    <h2>{{ title }}</h2>

    <p class="mb-4">
      <slot name="description"></slot>
    </p>

    <div class="example-wrapper border border-border-color rounded">
      <div class="p-6 border-b border-b-border-color">
        <slot></slot>
      </div>

      <div class="px-4 py-3 flex justify-end items-center gap-3">
        <div
          class="relative"
          @click="copySource"
        >
          <svg-icon name="copy" />
          <span
            :class="[
              'absolute -top-5 left-1/2 font-mono text-sm opacity-0 -translate-x-1/2 transition-all pointer-events-none duration-300',
              { 'opacity-100 -translate-y-3': isCopied },
            ]"
            >Copied!</span
          >
        </div>

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
  @apply transition-all
  origin-top
  border-x
  border-b
  rounded-b
  border-border-color
  overflow-x-auto;
}
</style>
