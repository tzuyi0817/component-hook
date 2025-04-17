# @component-hook/pdf-canvas

Rendering PDF documents onto a canvas with `vue3` and `react` component.  
Implementation depository: [PDF-signature](https://github.com/tzuyi0817/PDF-signature)

<p>
  <a href="https://npm-stat.com/charts.html?package=@component-hook/pdf-canvas">
    <img src="https://img.shields.io/npm/dm/@component-hook/pdf-canvas.svg" alt="npm"/>
  </a>
  <a href="https://www.npmjs.com/package/@component-hook/pdf-canvas">
    <img src="https://img.shields.io/npm/v/@component-hook/pdf-canvas.svg" alt="npm"/>
  </a>
</p>

## Features

- Rendering PDF documents onto a canvas
- Open encrypted PDF files
- Drag and drop the images and text onto the canvas
- Manually add the images and text onto the canvas
- Full `TypeScript` support

## Documentation

For detailed documentation and usage examples, please visit: [Official Docs](https://tzuyi0817.github.io/component-hook/#/component/vue-pdf-canvas).

## Installation

```bash
# Using npm
$ npm install @component-hook/pdf-canvas

# Using yarn
$ yarn add @component-hook/pdf-canvas

# Using pnpm
$ pnpm install @component-hook/pdf-canvas
```

## Base Usage

### Vue3

```vue
<script setup lang="ts">
import PdfCanvas, { loadFile, type PDF } from '@component-hook/pdf-canvas/vue';
import { ref } from 'vue';

const currentPdf = ref<PDF>();

async function uploadFile(event: Event) {
  const target = event.target as HTMLInputElement;
  const { files } = target;

  if (!files) return;
  const file = files[0];
  const content = await loadFile(file);

  currentPdf.value = content;
  target.value = '';
}
</script>

<template>
  <div class="w-fit flex flex-col items-center gap-3">
    <pdf-canvas
      v-if="currentPdf"
      :file="currentPdf"
    />

    <p
      v-else
      class="font-mono text-sm"
    >
      Please select a PDF file or image.
    </p>

    <button class="relative">
      <input
        type="file"
        accept="application/pdf, .jpg, .png"
        class="opacity-0 top-0 left-0 absolute w-[94px] h-[36px] cursor-pointer"
        @change="uploadFile"
      />
      select file
    </button>
  </div>
</template>
```

### React

```tsx
import PdfCanvas, { loadFile, type PDF } from '@component-hook/pdf-canvas/react';
import { useState, type ChangeEvent } from 'react';

export function DrawPdf() {
  const [currentPdf, setCurrentPdf] = useState<PDF>();

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const { files } = target;

    if (!files || files.length === 0) return;

    const file = files[0];
    const content = await loadFile(file);

    setCurrentPdf(content);
    target.value = '';
  };

  return (
    <div>
      {currentPdf ? <PdfCanvas file={currentPdf} /> : <p>Please select a PDF file or image.</p>}

      <button>
        <input
          type="file"
          accept="application/pdf, .jpg, .png"
          onChange={uploadFile}
        />
        select file
      </button>
    </div>
  );
}
```

## License

This project is licensed under the MIT License.
