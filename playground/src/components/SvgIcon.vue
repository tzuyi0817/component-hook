<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  name: string;
  prefix?: string;
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg
    aria-hidden="true"
    :title="symbolId"
    class="w-4 h-4 text-gray-400 hover:text-gray-200 transition-colors cursor-pointer"
  >
    <use :href="symbolId" />
  </svg>
</template>
