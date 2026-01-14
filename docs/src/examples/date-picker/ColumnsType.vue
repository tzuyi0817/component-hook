<script setup lang="ts">
import { DatePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const currentDate = ref<number[]>([2030, 8]);
</script>

<template>
  <date-picker
    v-model="currentDate"
    class="max-w-125 rounded-lg"
    :columns-type="['year', 'month']"
  />

  <p class="mt-6 font-mono text-sm">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
