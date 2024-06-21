<script setup lang="ts">
import { ref, reactive } from 'vue';
import Picker from '@component-library/picker';

interface LangType {
  langType?: number;
  code?: string;
  original?: string;
  version?: number;
}

const currentSelect = ref<Array<LangType>>([]);
const anchor = ref([0, 1, 2]);
const currentSingle = ref<LangType>({});
const anchorSingle = ref(1);
const currentDate = ref<Array<number>>([]);
const currentTime = ref<Array<number>>([]);
const isShowPicker = ref(false);
const isShowSingle = ref(false);
const isShowDate = ref(false);
const isShowTime = ref(false);
const singleData = [
  { langType: 2, code: 'vi', original: 'Tiếng Việt' },
  { langType: 0, code: 'en', original: 'English' },
  { langType: 1, code: 'cn', original: '中文' },
];
const dataList = ref([singleData, singleData, singleData]);
const options = reactive({
  confirmColor: '#000',
  cancelClass: 'test',
  titleText: 'Title',
});

function confirm(value: Array<LangType>) {
  currentSelect.value = value;
}

function confirmSingle(value: LangType) {
  currentSingle.value = value;
}

function confirmDate(value: Array<number>) {
  console.log({ date: value });
}

function confirmTime(value: Array<number>) {
  console.log({ time: value });
}

function cancel() {
  console.log('cancel');
}

function toggle() {
  isShowPicker.value = true;
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
  <picker
    v-model:isShowPicker="isShowPicker"
    v-model:anchor="anchor"
    :data="dataList"
    :show-key="['original', 'original', 'original']"
    :options="options"
    :swipe-time="500"
    @confirm="confirm"
    @cancel="cancel"
  />

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

  <button
    class="btn"
    @click="toggle"
  >
    toggle
  </button>
  <button
    class="btn"
    @click="openSingle"
  >
    single
  </button>
  <button
    class="btn"
    @click="openDate"
  >
    date
  </button>
  <button
    class="btn"
    @click="openTime"
  >
    time
  </button>

  <div class="anchors">
    <ul>
      <h3>toggle</h3>
      <li>anchor：{{ anchor }}</li>
      <li>select：{{ currentSelect }}</li>
    </ul>
    <ul>
      <h3>single</h3>
      <li>anchor：{{ anchorSingle }}</li>
      <li>select：{{ currentSingle }}</li>
    </ul>
    <ul>
      <h3>date</h3>
      <li>anchor：{{ currentDate }}</li>
      <li>select：{{ currentDate }}</li>
    </ul>
    <ul>
      <h3>time</h3>
      <li>anchor：{{ currentTime }}</li>
      <li>select：{{ currentTime }}</li>
    </ul>
  </div>
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

.btn {
  padding: 10px;
  margin: 0 5px;
  border-radius: 8px;
  border: 1px solid white;
  background-color: rgb(53, 53, 250);
  color: white;
}

.anchors {
  margin-top: 50px;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
}
</style>
