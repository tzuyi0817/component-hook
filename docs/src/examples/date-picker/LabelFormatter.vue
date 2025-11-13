<script setup lang="ts">
import { DatePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const currentDate = ref<number[]>([]);

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
    class="max-w-[500px] rounded-lg"
    :columns-type="['month', 'day', 'year']"
    :format-month-label="month => MONTHS_MAP[month]"
    :format-day-label="day => day.padStart(2, '0')"
  />

  <p class="mt-6 text-sm font-mono">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
