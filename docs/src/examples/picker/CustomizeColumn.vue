<script lang="ts" setup>
import { ref } from 'vue';
import { Picker, type PickerSelectedValues } from '@component-hook/picker/vue';

const isShowPicker = ref(false);
const pickerValues = ref<PickerSelectedValues>([]);
const columns = [
  { langType: 0, code: 'en', original: 'English' },
  { langType: 1, code: 'cn', original: '中文' },
  { langType: 2, code: 'vi', original: 'Tiếng Việt' },
  { langType: 3, code: 'jp', original: '日本語' },
  { langType: 4, code: 'kr', original: '한국어' },
];

function onConfirm(values: PickerSelectedValues) {
  pickerValues.value = values;
}
</script>

<template>
  <picker
    v-model:show="isShowPicker"
    :columns="columns"
    title="Customize Column Selector"
    :columns-field-names="{ label: 'original', value: 'code' }"
    @confirm="onConfirm"
  />

  <button @click="isShowPicker = true">toggle Customize Column picker</button>

  <p class="mt-6 text-sm font-mono">Selected language: {{ pickerValues.join('') || 'not selected yet' }}</p>
</template>
