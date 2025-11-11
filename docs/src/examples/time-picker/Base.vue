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
    class="max-w-[500px] rounded-lg"
    @change="onChange"
  />

  <p class="mt-6 text-sm font-mono">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
