<script setup lang="ts">
import { DatePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const currentDate = ref<number[]>([]);
</script>

<template>
  <date-picker
    v-model="currentDate"
    class="max-w-[500px] rounded-lg"
    :min-date="new Date(2024, 0, 1)"
    :max-date="new Date(2026, 5, 1)"
  />

  <p class="mt-6 text-sm font-mono">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
