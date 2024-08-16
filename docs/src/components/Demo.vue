<script setup lang="ts">
import { ref } from 'vue';
import SourceCode from '@/components/SourceCode.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import CopySource from '@/components/CopySource.vue';
import { highlight } from '@/utils/highlight';
import { sleep } from '@/utils/common';

interface Props {
  title: string;
  source: string;
  playground: string;
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="`https://code-immediate.vercel.app/${playground}`"
        >
          <svg-icon name="playground" />
        </a>

        <copy-source :source="source" />

        <svg-icon
          name="source"
          @click="toggleSource"
        />
      </div>
    </div>

    <div>
      <div
        v-show="isDisplaySource"
        :class="['example-source-wrapper h-0', isShowSource ? 'scale-y-100 h-full' : 'scale-y-0']"
        @transitionend="isDisplaySource = isShowSource"
      >
        <source-code
          :source="encode(source)"
          :raw="encodeURIComponent(source)"
        />
      </div>

      <div
        v-show="isShowSource"
        :class="['example-source-collapse', isShowSource ? 'opacity-100' : 'opacity-0']"
        @click="toggleSource"
      >
        Collapse source
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.example-source {
  &-wrapper {
    @apply transition-all
    origin-top
    border-x
    border-border-color;
  }
  &-collapse {
    @apply text-center
    border
    border-border-color
    rounded-b
    text-sm
    transition-opacity
    cursor-pointer
    sticky
    bottom-0
    bg-bg-color
    p-3
    hover:text-primary;
  }
}
</style>
