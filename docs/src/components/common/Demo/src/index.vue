<script setup lang="ts">
import { ref } from 'vue';
import { Collapse, Describedby, ExternalLink, SvgIcon } from '@/components/common';
import { highlight } from '@/utils/highlight';
import CopySource from './CopySource.vue';
import SourceCode from './SourceCode.vue';

interface Props {
  title: string;
  source: string;
  playground: string;
  language?: string;
}

defineOptions({ name: 'Demo' });

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

    <p class="mb-4 leading-8">
      <slot name="description"></slot>
    </p>

    <div class="example-wrapper border border-border rounded">
      <div class="p-6 border-b border-b-border">
        <slot></slot>
      </div>

      <div class="px-4 py-3 flex justify-end items-center gap-3">
        <describedby title="Open in Playground">
          <external-link
            :href="`https://code-immediate.vercel.app/${playground}`"
            title="Open in Playground"
          >
            <svg-icon
              name="playground"
              class="w-4 h-4"
            />
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
            class="w-4 h-4"
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
        :class="['example-source-collapse', isShowSource ? 'transition-opacity' : 'transition-none opacity-0 h-0']"
        role="button"
        tabindex="0"
        @click="toggleSource"
      >
        Collapse source
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.example-source-wrapper {
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: var(--border-color);
  border-style: solid;
}

.example-source-collapse {
  text-align: center;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 0 12px;
  font-size: 14px;
  line-height: 44px;
  cursor: pointer;
  position: sticky;
  bottom: 0;
  background-color: var(--bg-color);
  transition-duration: 300ms;
}

.example-source-collapse:hover {
  color: var(--primary);
}
</style>
