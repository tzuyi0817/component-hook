<script setup lang="ts">
import { TimePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const isShowPicker = ref(false);
const currentTime = ref<number[]>([]);

const HOURS_MAP: Record<string, string> = {
  0: '12 AM',
  1: '1 AM',
  2: '2 AM',
  3: '3 AM',
  4: '4 AM',
  5: '5 AM',
  6: '6 AM',
  7: '7 AM',
  8: '8 AM',
  9: '9 AM',
  10: '10 AM',
  11: '11 AM',
  12: '12 PM',
  13: '1 PM',
  14: '2 PM',
  15: '3 PM',
  16: '4 PM',
  17: '5 PM',
  18: '6 PM',
  19: '7 PM',
  20: '8 PM',
  21: '9 PM',
  22: '10 PM',
  23: '11 PM',
};
</script>

<template>
  <time-picker
    v-model="currentTime"
    v-model:show="isShowPicker"
    title="Label Formatter Selector"
    :format-hour-label="(hour: string) => HOURS_MAP[hour]"
  />

  <button @click="isShowPicker = true">toggle Label Formatter picker</button>

  <p class="mt-6 text-sm font-mono">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
