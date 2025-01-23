<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker, type PickerSelectedValues } from '@component-hook/picker/vue';

const isShowPicker = ref(false);
const currentDate = ref<PickerSelectedValues>([]);
</script>

<template>
  <date-picker
    v-model="currentDate"
    v-model:show="isShowPicker"
    title="Custom Range Selector"
    :min-date="new Date(2024, 0, 1)"
    :max-date="new Date(2026, 5, 1)"
  />

  <button @click="isShowPicker = true">toggle Custom Range picker</button>

  <p class="mt-6 text-sm font-mono">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
