<script lang="ts" setup>
import { ref } from 'vue';
import { Picker, type PickerSelectedValues } from '@component-hook/picker/vue';

const isShowPicker = ref(false);
const pickerValues = ref<PickerSelectedValues>([]);
const singleData = [
  { langType: 2, code: 'vi', original: 'Tiếng Việt' },
  { langType: 0, code: 'en', original: 'English' },
  { langType: 1, code: 'cn', original: '中文' },
];

function onConfirm(values: PickerSelectedValues) {
  pickerValues.value = values;
}

function onCancel() {
  console.log('cancel');
}
</script>

<template>
  <picker
    v-model:show="isShowPicker"
    :columns="singleData"
    title="single selector"
    @confirm="onConfirm"
    @cancel="onCancel"
  />

  <button @click="isShowPicker = true">toggle single picker</button>

  <p class="mt-6 text-sm font-mono">Selected language: {{ pickerValues.join('') || 'not selected yet' }}</p>
</template>
