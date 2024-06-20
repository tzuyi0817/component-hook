# vue3-picker

Picker component with vue3 ([DEMO](https://tzuyi0817.github.io/vue-componet-library/))

<p>
  <a href="https://npm-stat.com/charts.html?package=vue3-picker">
    <img src="https://img.shields.io/npm/dm/vue3-picker.svg" alt="npm"/>
  </a>
  <a href="https://www.npmjs.com/package/vue3-picker">
    <img src="https://img.shields.io/npm/v/vue3-picker.svg" alt="npm"/>
  </a>
</p>

## Features

- Picker List
- Supports single-column and concatenated data
- Scroll wheel 3D effect
- Custom title, confirm and cancel text, class and color
- Custom wheel swipe Time
- Built-in date and time data
- Supports typescript

## Getting started

### Installation

First step is to install it using `yarn`、`npm` or `pnpm`:

```bash
npm install vue3-picker

# or use yarn
yarn add vue3-picker

# or use pnpm
pnpm install vue3-picker
```

### Precautions

If you use Vite Tooling and report an error (TypeError: Cannot read properties of null (reading 'setupContext')):

```bash
defineConfig({
  ...
  resolve: {
    dedupe: ['vue'],
  },
});
```

### Basic Using

```vue
<script setup>
import { ref, computed, reactive } from 'vue';
import { Picker } from 'vue3-picker';

const currentSelect = ref({});
const anchor = ref([0, 1, 2]);
const currentSingle = ref < LangType > {};
const anchorSingle = ref(1);
const currentDate = ref([2022, 7, 7]);
const currentTime = ref([]);
const isShowPicker = ref(false);
const isShowDate = ref(false);
const isShowTime = ref(false);
const dataList = ref([
  [
    { langType: 2, code: 'vi', original: 'Tiếng Việt' },
    { langType: 0, code: 'en', original: 'English' },
    { langType: 1, code: 'cn', original: '中文' },
  ],
  [
    { langType: 2, code: 'vi', original: 'Tiếng Việt' },
    { langType: 0, code: 'en', original: 'English' },
    { langType: 1, code: 'cn', original: '中文' },
  ],
  [
    { langType: 2, code: 'vi', original: 'Tiếng Việt' },
    { langType: 0, code: 'en', original: 'English' },
    { langType: 1, code: 'cn', original: '中文' },
  ],
]);

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

function confirm(value) {
  currentSelect.value = value;
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
    :showKey="['original', 'original', 'original']"
    :options="options"
    :swipeTime="500"
    @confirm="confirm"
    @cancel="cancel"
  />

  <picker
    v-model:isShowPicker="isShowSingle"
    v-model:anchor="anchorSingle"
    :data="singleData"
    showKey="original"
    :options="options"
    @confirm="confirmSingle"
  />

  <picker
    v-model:isShowPicker="isShowDate"
    v-model:anchor="currentDate"
    type="date"
    :options="{ titleText: 'date selector' }"
  />

  <picker
    v-model:isShowPicker="isShowTime"
    v-model:anchor="currentTime"
    type="time"
    :options="{ titleText: 'time selector' }"
  />

  <button @click="toggle">toggle</button>
  <button @click="openSingle">single</button>
  <button @click="openDate">date</button>
  <button @click="openTime">time</button>
</template>
```

### Props

<table width="100%">
  <tr>
    <th style="min-width:160px">Name</th>
    <th>Required</th>
    <th>Type</th>
    <th>Description</th>
    <th style="min-width:130px">Default</th>
  </tr>
  <tr>
    <td>v-model:isShowPicker</td>
    <td>true</td>
    <td>Boolean</td>
    <td>Control picker show</td>
    <td></td>
  </tr>
  <tr>
    <td>v-model:anchor</td>
    <td>true</td>
    <td>Number or Number[]</td>
    <td>Picker current select index (single column for Number、 multiple columns for Array)</td>
    <td>date: [2022, 7, 12] <br/> time: [10, 13, 20]</td>
  </tr>
  <tr>
    <td>data</td>
    <td>false</td>
    <td>Array</td>
    <td>Picker list [1, 2, 3] or [[1, 2, 3], [1, 2, 3]]</td>
    <td></td>
  </tr>
  <tr>
    <td>type</td>
    <td>false</td>
    <td>String</td>
    <td>Built-in picker type, no need to pass in data (date, time)</td>
    <td>date: current date <br/> time: current time</td>
  </tr>
  <tr>
    <td>showKey</td>
    <td>false</td>
    <td>String or String[]</td>
    <td>Wheel options name (object key)</td>
    <td></td>
  </tr>
  <tr>
    <td>swipeTime</td>
    <td>false</td>
    <td>Number</td>
    <td>Wheel swipe Time</td>
    <td>500</td>
  </tr>
  <tr>
    <td>options</td>
    <td>false</td>
    <td>Object</td>
    <td>Custom text, color and class</td>
    <td>See below for details</td>
  </tr>
</table>

#### options

```object
{
  cancelClass: '',
  confirmClass: '',
  titleClass: '',
  cancelColor: '#999',
  confirmColor: '#42b983',
  titleColor: '',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  titleText: '',
}
```

### Events

| Event   | Description                                  | Return Parameters |
| :------ | :------------------------------------------- | :---------------- |
| confirm | Triggered when the confirm button is clicked | Selected value    |
| cancel  | Triggered when the cancel button is clicked  | None              |
