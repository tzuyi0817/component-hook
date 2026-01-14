<script setup lang="ts">
import { TimePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const currentTime = ref<number[]>([]);

function onChange(value: number[]) {
  currentTime.value = value;
}
</script>

<template>
  <time-picker
    class="max-w-125 rounded-lg"
    @change="onChange"
  />

  <p class="mt-6 font-mono text-sm">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
