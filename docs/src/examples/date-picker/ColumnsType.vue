<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from '@component-hook/picker/vue';

const isShowPicker = ref(false);
const currentDate = ref<number[]>([2030, 8]);
</script>

<template>
  <date-picker
    v-model="currentDate"
    v-model:show="isShowPicker"
    title="Columns Type Selector"
    :columns-type="['year', 'month']"
  />

  <button @click="isShowPicker = true">toggle Columns Type picker</button>

  <p class="mt-6 text-sm font-mono">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
