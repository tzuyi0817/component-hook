<script setup lang="ts">
import { TimePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const isShowPicker = ref(false);
const currentTime = ref<number[]>([]);
</script>

<template>
  <time-picker
    v-model="currentTime"
    v-model:show="isShowPicker"
    title="Custom Range Selector"
    min-time="12:20:30"
    max-time="16:30:48"
  />

  <button @click="isShowPicker = true">toggle Custom Range picker</button>

  <p class="mt-6 text-sm font-mono">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
