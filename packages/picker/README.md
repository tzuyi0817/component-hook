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
import { Picker } from '@component-hook/picker/vue';
import { ref } from 'vue';

const pickerValues = ref<number[]>([]);
const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));

function onChange(value: number[]) {
  pickerValues.value = value;
}
</script>

<template>
  <picker
    :columns="columns"
    @change="onChange"
  />

  <p class="mt-6 text-sm font-mono">Selected value: {{ pickerValues.join('') || 'not selected yet' }}</p>
</template>
```

### React

```tsx
import { Picker } from '@component-hook/picker/react';
import { useState } from 'react';

const columns = Array.from({ length: 50 }, (_, index) => ({ label: index, value: index }));

export function BasePicker() {
  const [pickerValues, setPickerValues] = useState<number[]>([]);

  return (
    <>
      <Picker
        columns={columns}
        onChange={setPickerValues}
      />

      <p>Selected value: {pickerValues.join('') || 'not selected yet'}</p>
    </>
  );
}
```

## License

This project is licensed under the MIT License.
