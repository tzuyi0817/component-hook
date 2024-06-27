<script setup lang="ts">
import Demo from '@/components/Demo.vue';
import CascadePicker from '@/examples/picker/Cascade.vue';
import cascadeSource from '@/examples/picker/Cascade.vue?raw';
import SinglePicker from '@/examples/picker/Single.vue';
import singleSource from '@/examples/picker/Single.vue?raw';
import DatePicker from '@/examples/picker/Date.vue';
import dateSource from '@/examples/picker/Date.vue?raw';
import TimePicker from '@/examples/picker/Time.vue';
import timeSource from '@/examples/picker/Time.vue?raw';
import installationMd from '@/markdowns/picker/installation.md?raw';
import { md } from '@/utils/highlight';
</script>

<template>
  <h1>Picker</h1>

  <p class="mb-5">Picker component with vue3.</p>

  <h2>Installation</h2>

  <div
    class="bg-code-bg rounded-md mb-4 p-4"
    v-html="md.render(installationMd)"
  ></div>

  <demo
    title="Cascade Picker"
    :source="cascadeSource"
  >
    <template #description>Use cascade data to define picker.</template>
    <cascade-picker />
  </demo>

  <demo
    title="Single Picker"
    :source="singleSource"
  >
    <template #description>Use single data to define picker.</template>
    <single-picker />
  </demo>

  <demo
    title="Built-in Date Picker"
    :source="dateSource"
  >
    <template #description>Use built-in date picker.</template>
    <date-picker />
  </demo>

  <demo
    title="Built-in Time Picker"
    :source="timeSource"
  >
    <template #description>Use built-in time picker.</template>
    <time-picker />
  </demo>
</template>

<style lang="postcss" scoped></style>
