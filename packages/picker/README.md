# @component-hook/picker

Picker component with `vue3` and `react`.

<p>
  <a href="https://npm-stat.com/charts.html?package=@component-hook/picker">
    <img src="https://img.shields.io/npm/dm/@component-hook/picker.svg" alt="npm"/>
  </a>
  <a href="https://www.npmjs.com/package/@component-hook/picker">
    <img src="https://img.shields.io/npm/v/@component-hook/picker.svg" alt="npm"/>
  </a>
</p>

## Features

- Supports `single-column` and `cascade` picker
- Scroll wheel 3D effect for smooth selection
- Customize `title`, `confirm` and `cancel` buttons
- Flexible column structure for different use cases
- Built-in `DatePicker` and `TimePicker` components
- Full TypeScript support

## Documentation

For detailed documentation and usage examples, please visit: [Official Docs](https://tzuyi0817.github.io/component-hook/#/component/vue-picker).

## Installation

```bash
# Using npm
$ npm install @component-hook/picker

# Using yarn
$ yarn add @component-hook/picker

# Using pnpm
$ pnpm install @component-hook/picker
```

## Base Usage

### Vue3

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { Picker } from '@component-hook/picker/vue';

const isShowPicker = ref(false);
const pickerValues = ref<number[]>([]);
const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));

function onConfirm(value: number[]) {
  pickerValues.value = value;
}

function onCancel() {
  console.log('cancel');
}
</script>

<template>
  <picker
    v-model:show="isShowPicker"
    :columns="columns"
    title="Base Selector"
    @confirm="onConfirm"
    @cancel="onCancel"
  />

  <button @click="isShowPicker = true">toggle Base picker</button>

  <p class="mt-6 text-sm font-mono">Selected value: {{ pickerValues.join('') || 'not selected yet' }}</p>
</template>
```

### React

```tsx
import { useState } from 'react';
import { Picker } from '@component-hook/picker/react';

const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));

export function BasePicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  function onConfirm(values: number[]) {
    setPickerValues(values);
  }

  return (
    <>
      <Picker
        show={showPicker}
        columns={columns}
        title="Base Selector"
        onClose={() => setShowPicker(false)}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />

      <button onClick={() => setShowPicker(true)}>toggle Base picker</button>

      <p>Selected value: {pickerValues.join('') || 'not selected yet'}</p>
    </>
  );
}

function onCancel() {
  console.log('cancel');
}
```

## License

This project is licensed under the MIT License.
