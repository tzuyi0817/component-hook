<script setup lang="ts">
import { ref } from 'vue';
import { TimePicker, type PickerSelectedValues } from '@component-hook/picker/vue';

const isShowPicker = ref(false);
const currentTime = ref<PickerSelectedValues>([]);
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
