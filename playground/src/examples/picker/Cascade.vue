<script lang="ts" setup>
import { ref } from 'vue';
import Picker from '@component-hook/picker';

interface LangType {
  langType?: number;
  code?: string;
  original?: string;
  version?: number;
}

const currentSelect = ref<Array<LangType>>([]);
const isShowPicker = ref(false);
const anchor = ref([0, 1, 2]);
const singleData = [
  { langType: 2, code: 'vi', original: 'Tiếng Việt' },
  { langType: 0, code: 'en', original: 'English' },
  { langType: 1, code: 'cn', original: '中文' },
];
const dataList = ref([singleData, singleData, singleData]);

function onConfirm(value: Array<LangType>) {
  currentSelect.value = value;
}

function onCancel() {
  console.log('cancel');
}
</script>

<template>
  <picker
    v-model:isShowPicker="isShowPicker"
    v-model:anchor="anchor"
    :data="dataList"
    :show-key="['original', 'original', 'original']"
    :options="{ titleText: 'cascade selector' }"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
  <button @click="isShowPicker = true">toggle cascade picker</button>
</template>
