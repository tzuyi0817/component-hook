<script setup lang="ts">
import { computed } from 'vue';
import CopySource from '@/components/CopySource.vue';

interface Props {
  source: string;
  raw?: string;
}

const props = defineProps<Props>();
const decoded = computed(() => decodeURIComponent(props.source));
</script>

<template>
  <div class="source-code-wrapper relative">
    <copy-source
      v-if="raw"
      :source="raw"
      is-absolute
      class="top-2 right-2"
    />

    <div
      class="source-code"
      v-html="decoded"
    ></div>
  </div>
</template>
