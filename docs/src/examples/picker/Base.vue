<script setup lang="ts">
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const isShowPicker = ref(false);
const pickerValues = ref<number[]>([]);
const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));

function onConfirm(value: number[]) {
  pickerValues.value = value;
}

function onCancel() {
  console.log('cancel');
}
</script>

<template>
  <picker
    v-model:show="isShowPicker"
    :columns="columns"
    title="Base Selector"
    @confirm="onConfirm"
    @cancel="onCancel"
  />

  <button @click="isShowPicker = true">toggle Base picker</button>

  <p class="mt-6 text-sm font-mono">Selected value: {{ pickerValues.join('') || 'not selected yet' }}</p>
</template>
