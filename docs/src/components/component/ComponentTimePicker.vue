<script setup lang="ts">
import Demo from '@/components/Demo.vue';
import BasePicker from '@/examples/time-picker/Base.vue';

import installationMd from '@/markdowns/picker/installation.md?raw';
import cssVariablesMd from '@/markdowns/picker/css-variables.md?raw';
import { md } from '@/utils/highlight';

interface Props {
  frontEndFrame: string;
  baseSource: string;
  basePlayground: string;
  language?: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <h2>Time Picker</h2>

    <p>
      Time Picker component with <code>{{ frontEndFrame }}</code
      >.
    </p>

    <div v-html="md.render(installationMd)"></div>

    <demo
      title="Base Usage"
      :source="baseSource"
      :playground="basePlayground"
      :language="language"
    >
      <template #description>
        <p>Time picker for selecting hour, minute and second.</p>
        <p>When no time is specified, the current time is selected by default.</p>
      </template>
      <base-picker />
    </demo>

    <h3>API</h3>
    <!-- <div v-html="md.render(indexMd)"></div> -->
    <div v-html="md.render(cssVariablesMd)"></div>
  </div>
</template>
