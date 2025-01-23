<script setup lang="ts">
import installationMd from '@/markdowns/picker/installation.md?raw';
import { md } from '@/utils/highlight';

interface Props {
  description: string;
  // baseSource: string;
  // basePlayground: string;
  // bindingSource: string;
  // bindingPlayground: string;
  // multiColumnSource: string;
  // multiColumnPlayground: string;
  // cascadeSource: string;
  // cascadePlayground: string;
  // singleSource: string;
  // singlePlayground: string;
  // attributesMd: string;
  // eventsMd: string;
  language?: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <h2>Date Picker</h2>

    <p>{{ description }}</p>

    <div v-html="md.render(installationMd)"></div>
  </div>
</template>
