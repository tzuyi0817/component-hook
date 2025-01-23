<script setup lang="ts">
import { ref } from 'vue';
import { Picker, type PickerSelectedValues } from '@component-hook/picker/vue';

const isShowPicker = ref(false);
const pickerValues = ref<PickerSelectedValues>([]);
const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));
</script>

<template>
  <picker
    v-model="pickerValues"
    v-model:show="isShowPicker"
    :columns="columns"
    title="Binding Selector"
  />

  <button @click="isShowPicker = true">toggle Binding picker</button>

  <p class="mt-6 text-sm font-mono">Selected value: {{ pickerValues.join('') || 'not selected yet' }}</p>
</template>
