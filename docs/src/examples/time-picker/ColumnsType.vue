<script setup lang="ts">
import { TimePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const isShowPicker = ref(false);
const currentTime = ref<number[]>([12, 50]);
</script>

<template>
  <time-picker
    v-model="currentTime"
    v-model:show="isShowPicker"
    title="Columns Type Selector"
    :columns-type="['hour', 'minute']"
  />

  <button @click="isShowPicker = true">toggle Columns Type picker</button>

  <p class="mt-6 text-sm font-mono">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
