<script setup lang="ts">
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const pickerValues = ref<number[]>([]);
const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));

function onChange(value: number[]) {
  pickerValues.value = value;
}
</script>

<template>
  <picker
    :columns="columns"
    class="max-w-[400px] rounded-lg"
    @change="onChange"
  />

  <p class="mt-6 text-sm font-mono">Selected value: {{ pickerValues.join('') || 'not selected yet' }}</p>
</template>
