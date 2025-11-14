<script setup lang="ts">
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const pickerValues = ref<number[]>([2, 20]);
const columns = Array.from({ length: 2 }, () =>
  Array.from({ length: 50 }, (_, index) => ({ label: index, value: index })),
);
</script>

<template>
  <picker
    v-model="pickerValues"
    :columns="columns"
    class="max-w-[400px] rounded-lg"
  />

  <p class="mt-6 font-mono text-sm">Selected value: {{ pickerValues.join(' / ') || 'not selected yet' }}</p>
</template>
