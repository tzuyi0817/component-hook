<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  name: string;
  prefix?: string;
  color?: string;
}

defineOptions({ name: 'SvgIcon' });
const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  color: '#333',
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg
    aria-hidden="true"
    :title="symbolId"
  >
    <use
      :href="symbolId"
      :fill="color"
    />
  </svg>
</template>
