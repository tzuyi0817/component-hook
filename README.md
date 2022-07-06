# vue3-picker

Vue3 Picker component ([DEMO](https://tzuyi0817.github.io/vue3-picker/))

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
- Built-in date data
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
import { ref, computed, reactive } from "vue";
import { Picker } from 'vue3-picker';

const currentSelect = ref({})
const currentDate = ref([2022, 7, 7]);
const isShowPicker = ref(false);
const isShowDate = ref(false);
const dataList = ref([
  { langType: 2, code: "vi", original: "Tiếng Việt" },
  { langType: 0, code: "en", original: "English" },
  { langType: 1, code: "cn", original: "中文" },
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

function confirm(value) {
  currentSelect.value = value;
}

function confirmDate(value) {
  currentDate.value = value;
}

function cancel() {
  console.log('cancel');
}

function toggle() {
  isShowPicker.value = true;
}

function date() {
  isShowDate.value = true;
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

  <button @click="toggle">toggle</button>
  <button @click="date">date</button>
</template>
```

### Props

Name | Required | Type | Description | Default |
:--- | :--- | :--- | :--- | :--- |
v-model:isShowPicker | true | Boolean | Control picker show |
data | true | Array | Picker list `[1, 2, 3]` or `[[1, 2, 3], [1, 2, 3]]` |
type | false | String | Built-in picker type, no need to pass in data - (date) |
anchor | true | Number or Array | Picker current select position (single column for Number、 multiple columns for Array)
showKey | false | String or Array | Wheel options name (object key) |
swipeTime | false | Number | Wheel swipe Time | 500 |
options | false | Object | Custom text, color and class | See below for details |

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
Event | Description | Return Parameters |
:--- | :--- | :--- |
confirm | Triggered when the confirm button is clicked | Selected Value |
cancel | Triggered when the cancel button is clicked | none |