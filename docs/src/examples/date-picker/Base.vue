<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from '@component-hook/picker/vue';

const isShowPicker = ref(false);
const currentDate = ref<number[]>([]);

function onConfirm(value: number[]) {
  currentDate.value = value;
}

function onCancel() {
  console.log('cancel');
}
</script>

<template>
  <date-picker
    v-model:show="isShowPicker"
    title="Base Selector"
    @confirm="onConfirm"
    @cancel="onCancel"
  />

  <button @click="isShowPicker = true">toggle Base picker</button>

  <p class="mt-6 text-sm font-mono">Selected date: {{ currentDate.join(' / ') || 'not selected yet' }}</p>
</template>
