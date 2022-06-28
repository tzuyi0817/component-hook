# vue3-picker

Vue3 Picker component

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
const isShowPicker = ref(false);
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

function cancel() {
  console.log('cancel');
}

function toggle() {
  isShowPicker.value = true;
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

  <button @click="toggle">toggle</button>
</template>
```

### Props

Name | Required | Type | Description | <div style="min-width: 130pt">Default</div> |
:--- | :--- | :--- | :--- | :--- |
v-model:isShowPicker | true | Boolean | control picker show |
data | true | Array | picker list |
anchor | true | Number or Array | picker current select position (single-column for Number、 concatenated for Array)
showKey | false | String or Array | wheel options name (object key) |
swipeTime | false | Number | wheel swipe Time | 500 |
options | false | Object | Custom text, color and class | cancelClass: ""<br>confirmClass: ""<br>titleClass: ""<br> cancelColor: "#999"<br>confirmColor: "#42b983"<br> titleColor: ""<br>cancelText: "Cancel"<br>confirmText: "Confirm"<br>titleText: "" |

