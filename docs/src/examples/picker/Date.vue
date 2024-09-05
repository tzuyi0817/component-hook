<script lang="ts" setup>
import { ref } from 'vue';
import Picker from '@component-hook/picker';

const currentDate = ref<Array<number>>([]);
const isShowPicker = ref(false);

function onConfirm(value: Array<number>) {
  currentDate.value = value;
}

function onCancel() {
  console.log('cancel');
}
</script>

<template>
  <picker
    v-model:is-show-picker="isShowPicker"
    v-model:anchor="currentDate"
    type="date"
    :options="{ titleText: 'date selector' }"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
  <button @click="isShowPicker = true">toggle date picker</button>

  <p class="mt-6 text-sm font-mono">Selected date: {{ currentDate.join('/') || 'not selected yet' }}</p>
</template>
