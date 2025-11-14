<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  name: string;
  prefix?: string;
}

defineOptions({ name: 'SvgIcon' });

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg
    aria-hidden="true"
    :title="symbolId"
    class="hover:text-icon-hover cursor-pointer text-gray-400 transition-colors"
  >
    <use :href="symbolId" />
  </svg>
</template>
