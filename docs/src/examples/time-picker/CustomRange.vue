<script setup lang="ts">
import { TimePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const currentTime = ref<number[]>([]);
</script>

<template>
  <time-picker
    v-model="currentTime"
    class="max-w-125 rounded-lg"
    min-time="12:20:30"
    max-time="16:30:48"
  />

  <p class="mt-6 font-mono text-sm">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
