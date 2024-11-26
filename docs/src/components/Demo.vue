<script setup lang="ts">
import { ref } from 'vue';
import Describedby from '@/components/Describedby.vue';
import SourceCode from '@/components/SourceCode.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import CopySource from '@/components/CopySource.vue';
import ExternalLink from '@/components/ExternalLink.vue';
import Collapse from '@/components/layout/Collapse.vue';
import { highlight } from '@/utils/highlight';

interface Props {
  title: string;
  source: string;
  playground: string;
  language?: string;
}

const props = defineProps<Props>();
const isShowSource = ref(false);

function encode(source: string, isHighlight = true) {
  const code = isHighlight ? highlight(source, props.language) : source;

  return encodeURIComponent(code);
}

async function toggleSource() {
  isShowSource.value = !isShowSource.value;
}
</script>

<template>
  <div class="demo-wrapper">
    <h3>{{ title }}</h3>

    <p class="mb-4">
      <slot name="description"></slot>
    </p>

    <div class="example-wrapper border border-border-color rounded">
      <div class="p-6 border-b border-b-border-color">
        <slot></slot>
      </div>

      <div class="px-4 py-3 flex justify-end items-center gap-3">
        <describedby title="Open in Playground">
          <external-link
            :href="`https://code-immediate.vercel.app/${playground}`"
            title="Open in Playground"
          >
            <svg-icon name="playground" />
          </external-link>
        </describedby>

        <copy-source
          :source="source"
          title="Copy Code"
        />

        <describedby
          title="View Source"
          aria-label="View Source"
        >
          <svg-icon
            name="source"
            @click="toggleSource"
          />
        </describedby>
      </div>
    </div>

    <div class="example-source">
      <collapse :is-show="isShowSource">
        <div class="example-source-wrapper">
          <source-code
            :source="encode(source)"
            :raw="encodeURIComponent(source)"
          />
        </div>
      </collapse>

      <div
        :class="['example-source-collapse', isShowSource ? 'py-3 transition-opacity' : 'transition-none opacity-0 h-0']"
        role="button"
        tabindex="0"
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
    @apply border-x border-border-color;
  }

  &-collapse {
    @apply text-center
    border
    border-border-color
    rounded-b
    duration-300
    px-3
    text-sm
    cursor-pointer
    sticky
    bottom-0
    bg-bg-color
    hover:text-primary;
  }
}
</style>
