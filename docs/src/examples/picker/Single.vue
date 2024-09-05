<script lang="ts" setup>
import { ref } from 'vue';
import Picker from '@component-hook/picker';

interface LangType {
  langType?: number;
  code?: string;
  original?: string;
}

const currentSelect = ref<LangType>({});
const isShowPicker = ref(false);
const anchor = ref(1);
const singleData = [
  { langType: 2, code: 'vi', original: 'Tiếng Việt' },
  { langType: 0, code: 'en', original: 'English' },
  { langType: 1, code: 'cn', original: '中文' },
];

function onConfirm(value: LangType) {
  currentSelect.value = value;
}

function onCancel() {
  console.log('cancel');
}
</script>

<template>
  <picker
    v-model:is-show-picker="isShowPicker"
    v-model:anchor="anchor"
    :data="singleData"
    show-key="original"
    :options="{ titleText: 'single selector' }"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
  <button @click="isShowPicker = true">toggle single picker</button>

  <p class="mt-6 text-sm font-mono">Selected language: {{ currentSelect?.original ?? 'not selected yet' }}</p>
</template>
