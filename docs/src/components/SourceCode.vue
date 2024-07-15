<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  source: string;
}

const props = defineProps<Props>();
const decoded = computed(() => decodeURIComponent(props.source));
</script>

<template>
  <div class="source-code-wrapper">
    <div
      class="source-code"
      v-html="decoded"
    ></div>
  </div>
</template>
