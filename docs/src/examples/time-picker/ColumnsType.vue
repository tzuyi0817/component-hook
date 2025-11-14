<script setup lang="ts">
import { TimePicker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const currentTime = ref<number[]>([12, 50]);
</script>

<template>
  <time-picker
    v-model="currentTime"
    class="max-w-[500px] rounded-lg"
    :columns-type="['hour', 'minute']"
  />

  <p class="mt-6 font-mono text-sm">Selected time: {{ currentTime.join(':') || 'not selected yet' }}</p>
</template>
