<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker, type PickerSelectedValues } from '@component-hook/picker/vue';

const isShowPicker = ref(false);
const currentDate = ref<PickerSelectedValues>([]);

const MONTHS_MAP: Record<string, string> = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};
</script>

<template>
  <date-picker
    v-model="currentDate"
    v-model:show="isShowPicker"
    title="Label Formatter Selector"
    :columns-type="['month', 'day', 'year']"
    :format-month-label="(month: string) => MONTHS_MAP[month]"
    :format-day-label="(day: string) => day.padStart(2, '0')"
  />

  <button @click="isShowPicker = true">toggle Label Formatter picker</button>

  <p class="mt-6 text-sm font-mono">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
