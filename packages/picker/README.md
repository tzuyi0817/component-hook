# @component-hook/picker

Picker component with vue3 ([DEMO](https://tzuyi0817.github.io/component-hook/#/component/picker))

<p>
  <a href="https://npm-stat.com/charts.html?package=@component-hook/picker">
    <img src="https://img.shields.io/npm/dm/@component-hook/picker.svg" alt="npm"/>
  </a>
  <a href="https://www.npmjs.com/package/@component-hook/picker">
    <img src="https://img.shields.io/npm/v/@component-hook/picker.svg" alt="npm"/>
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

## Installation

```bash
$ npm install @component-hook/picker

# or use yarn
$ yarn add @component-hook/picker

# or use pnpm
$ pnpm install @component-hook/picker
```

## Basic Usage

```vue
<script setup>
import { ref, reactive } from 'vue';
import Picker from '@component-hook/picker';

const currentSelect = ref({});
const anchor = ref([0, 1, 2]);
const currentSingle = ref({});
const anchorSingle = ref(1);
const currentDate = ref([2022, 7, 7]);
const currentTime = ref([]);
const isShowPicker = ref(false);
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

function onConfirm(value) {
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
    :options="options"
    :swipe-time="500"
    @confirm="onConfirm"
    @cancel="onCancel"
  />

  <picker
    v-model:isShowPicker="isShowSingle"
    v-model:anchor="anchorSingle"
    :data="singleData"
    show-key="original"
    :options="options"
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
</template>
```

## Attributes

| Name                 | Required | Type                  | Description                                                                         | Default               |
| -------------------- | -------- | --------------------- | ----------------------------------------------------------------------------------- | --------------------- |
| v-model:isShowPicker | true     | `boolean`             | Control picker show                                                                 | —                     |
| v-model:anchor       | true     | `number` / `number[]` | Picker current select index (single column for Number、 multiple columns for Array) | —                     |
| data                 | false    | `array`               | Picker list [1, 2, 3] or [[1, 2, 3], [1, 2, 3]]                                     | —                     |
| type                 | false    | `string`              | Built-in picker type, no need to pass in data (date, time)                          | —                     |
| showKey              | false    | `string` / `string[]` | Wheel options name (object key)                                                     | —                     |
| swipeTime            | false    | `number`              | Wheel swipe Time                                                                    | 500                   |
| options              | false    | `object`              | Custom text, color and class                                                        | See below for details |

## Options Attribute

```json
{
  "cancelClass": "",
  "confirmClass": "",
  "titleClass": "",
  "cancelColor": "#999",
  "confirmColor": "#42b983",
  "titleColor": "",
  "cancelText": "Cancel",
  "confirmText": "Confirm",
  "titleText": ""
}
```

## Events

| Event   | Description                                  | Type                           |
| :------ | :------------------------------------------- | :----------------------------- |
| confirm | Triggered when the confirm button is clicked | `Function () => selected item` |
| cancel  | Triggered when the cancel button is clicked  | `Function () => void`          |
