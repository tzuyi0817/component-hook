<script setup lang="ts">
import { DatePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const currentDate = ref<number[]>([]);

function onChange(value: number[]) {
  currentDate.value = value;
}
</script>

<template>
  <date-picker
    class="max-w-125 rounded-lg"
    @change="onChange"
  />

  <p class="mt-6 font-mono text-sm">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
