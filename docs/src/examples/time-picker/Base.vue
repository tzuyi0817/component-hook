<script setup lang="ts">
import { ref } from 'vue';
import { TimePicker, type PickerSelectedValues } from '@component-hook/picker/vue';

const isShowPicker = ref(false);
const currentTime = ref<PickerSelectedValues>([]);

function onConfirm(value: PickerSelectedValues) {
  currentTime.value = value;
}

function onCancel() {
  console.log('cancel');
}
</script>

<template>
  <time-picker
    v-model:show="isShowPicker"
    title="Base Selector"
    @confirm="onConfirm"
    @cancel="onCancel"
  />

  <button @click="isShowPicker = true">toggle Base picker</button>

  <p class="mt-6 text-sm font-mono">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
