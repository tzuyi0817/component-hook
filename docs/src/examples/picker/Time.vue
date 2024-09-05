<script lang="ts" setup>
import { ref } from 'vue';
import Picker from '@component-hook/picker';

const currentTime = ref<Array<number>>([]);
const isShowPicker = ref(false);

function onConfirm(value: Array<number>) {
  currentTime.value = value;
}

function onCancel() {
  console.log('cancel');
}
</script>

<template>
  <picker
    v-model:is-show-picker="isShowPicker"
    v-model:anchor="currentTime"
    type="time"
    :options="{ titleText: 'time selector' }"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
  <button @click="isShowPicker = true">toggle time picker</button>

  <p class="mt-6 text-sm font-mono">
    Selected time:
    {{ currentTime.map(num => `${num}`.padStart(2, '0')).join(':') || 'not selected yet' }}
  </p>
</template>
