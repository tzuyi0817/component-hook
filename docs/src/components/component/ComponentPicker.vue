<script setup lang="ts">
import Demo from '@/components/Demo.vue';
import CascadePicker from '@/examples/picker/Cascade.vue';
import SinglePicker from '@/examples/picker/Single.vue';
import DatePicker from '@/examples/picker/Date.vue';
import TimePicker from '@/examples/picker/Time.vue';
import installationMd from '@/markdowns/picker/installation.md?raw';
import optionsMd from '@/markdowns/picker/options-attribute.md?raw';
import { md } from '@/utils/highlight';

interface Props {
  description: string;
  cascadeSource: string;
  cascadePlayground: string;
  singleSource: string;
  singlePlayground: string;
  dateSource: string;
  datePlayground: string;
  timeSource: string;
  timePlayground: string;
  attributesMd: string;
  eventsMd: string;
  language?: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <h2>Picker</h2>

    <p>{{ description }}</p>

    <div v-html="md.render(installationMd)"></div>

    <demo
      title="Cascade Picker"
      :source="cascadeSource"
      :playground="cascadePlayground"
      :language="language"
    >
      <template #description> Use cascade data to define picker. </template>
      <cascade-picker />
    </demo>

    <demo
      title="Single Picker"
      :source="singleSource"
      :playground="singlePlayground"
      :language="language"
    >
      <template #description> Use single data to define picker. </template>
      <single-picker />
    </demo>

    <demo
      title="Built-in Date Picker"
      :source="dateSource"
      :playground="datePlayground"
      :language="language"
    >
      <template #description> Use built-in date picker. </template>
      <date-picker />
    </demo>

    <demo
      title="Built-in Time Picker"
      :source="timeSource"
      :playground="timePlayground"
      :language="language"
    >
      <template #description> Use built-in time picker. </template>
      <time-picker />
    </demo>

    <div v-html="md.render(attributesMd)"></div>

    <div v-html="md.render(optionsMd)"></div>

    <div v-html="md.render(eventsMd)"></div>
  </div>
</template>
