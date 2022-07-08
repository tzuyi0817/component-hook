<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import Picker from '@/components/Picker.vue';
import type { LangType } from "@/types";

const currentSelect = ref<LangType>({});
const currentDate = ref<Array<number>>([]);
const currentTime = ref();
const isShowPicker = ref(false);
const isShowDate = ref(false); 
const isShowTime = ref(false);
const dataList = ref([
  { langType: 2, code: "vi", original: "Tiếng Việt", version: 80 },
  { langType: 0, code: "en", original: "English", version: 95 },
  { langType: 1, code: "cn", original: "中文", version: 85 },
]);

const options = reactive({
  confirmColor: '#000',
  cancelClass: 'test',
  titleText: 'Title',
});

const anchor = computed(() => {
  const index = dataList.value.findIndex(({ langType }) => langType === currentSelect.value?.langType);
  const checkIndex = index > -1 ? index : 2;
  return checkIndex;
});

function confirm(value: LangType) {
  currentSelect.value = value;
}

function confirmDate(value: Array<number>) {
  currentDate.value = value;
}

function confirmTime(value: Array<number>) {
  currentTime.value = value;
}

function cancel() {
  console.log('cancel');
}

function toggle() {
  isShowPicker.value = true;
}

function openDate() {
  isShowDate.value = true;
}

function openTime() {
  isShowTime.value = true;
}
</script>

<template>
  <picker 
    v-model:isShowPicker="isShowPicker"
    :data="dataList"
    :anchor="anchor"
    showKey="original"
    :options="options"
    :swipeTime="500"
    @confirm="confirm"
    @cancel="cancel"
  />

  <picker 
    v-model:isShowPicker="isShowDate"
    :anchor="currentDate"
    type="date"
    :options="{ titleText: 'date selector' }"
    @confirm="confirmDate"
  />

  <picker 
    v-model:isShowPicker="isShowTime"
    :anchor="currentTime"
    type="time"
    :options="{ titleText: 'time selector' }"
    @confirm="confirmTime"
  />

  <button @click="toggle">toggle</button>
  <button @click="openDate">date</button>
  <button @click="openTime">time</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
