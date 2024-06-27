<script setup lang="ts">
import { ref, reactive } from 'vue';
import Picker from '@component-hook/picker';
import Demo from '@/components/Demo.vue';
import Cascade from '@/examples/picker/Cascade.vue';
import cascadeSource from '@/examples/picker/Cascade.vue?raw';

interface LangType {
  langType?: number;
  code?: string;
  original?: string;
  version?: number;
}

const currentSingle = ref<LangType>({});
const anchorSingle = ref(1);
const currentDate = ref<Array<number>>([]);
const currentTime = ref<Array<number>>([]);
const isShowSingle = ref(false);
const isShowDate = ref(false);
const isShowTime = ref(false);
const singleData = [
  { langType: 2, code: 'vi', original: 'Tiếng Việt' },
  { langType: 0, code: 'en', original: 'English' },
  { langType: 1, code: 'cn', original: '中文' },
];
const options = reactive({
  confirmColor: '#000',
  cancelClass: 'test',
  titleText: 'Title',
});

function confirmSingle(value: LangType) {
  currentSingle.value = value;
}

function confirmDate(value: Array<number>) {
  console.log({ date: value });
}

function confirmTime(value: Array<number>) {
  console.log({ time: value });
}

function openSingle() {
  isShowSingle.value = true;
}

function openDate() {
  isShowDate.value = true;
}

function openTime() {
  isShowTime.value = true;
}
</script>

<template>
  <demo
    title="Cascade Picker"
    :source="cascadeSource"
  >
    <template #description> Use cascade data to define picker. </template>
    <cascade />
  </demo>

  <picker
    v-model:isShowPicker="isShowSingle"
    v-model:anchor="anchorSingle"
    :data="singleData"
    show-key="original"
    :options="options"
    @confirm="confirmSingle"
  />

  <picker
    v-model:isShowPicker="isShowDate"
    v-model:anchor="currentDate"
    type="date"
    :options="{ titleText: 'date selector' }"
    @confirm="confirmDate"
  />

  <picker
    v-model:isShowPicker="isShowTime"
    v-model:anchor="currentTime"
    type="time"
    :options="{ titleText: 'time selector' }"
    @confirm="confirmTime"
  />

  <button @click="openSingle">single</button>
  <button @click="openDate">date</button>
  <button @click="openTime">time</button>
</template>

<style lang="postcss" scoped></style>
