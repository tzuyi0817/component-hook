<script lang="ts" setup>
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const pickerValues = ref<Array<string | number>>([]);
const columns = [
  { langType: 0, code: 'en', original: 'English' },
  { langType: 1, code: 'cn', original: '中文' },
  { langType: 2, code: 'vi', original: 'Tiếng Việt' },
  { langType: 3, code: 'jp', original: '日本語' },
  { langType: 4, code: 'kr', original: '한국어' },
];

function onChange(values: Array<string | number>) {
  pickerValues.value = values;
}
</script>

<template>
  <picker
    :columns="columns"
    :columns-field-names="{ label: 'original', value: 'code' }"
    class="max-w-100 rounded-lg"
    @change="onChange"
  />

  <p class="mt-6 font-mono text-sm">Selected language: {{ pickerValues.join('') || 'not selected yet' }}</p>
</template>
