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
  <div>
    <pdf-canvas
      v-if="currentPdf"
      :file="currentPdf"
    />

    <p v-else>Please select a PDF file or image.</p>

    <button class="relative">
      <input
        type="file"
        accept="application/pdf, .jpg, .png"
        class="absolute top-0 left-0 h-[36px] w-[94px] cursor-pointer opacity-0"
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

## ⚠️ Required Vite Configuration

If you're using Vite in development mode, you must exclude this package from Vite's dependency optimization, because it internally uses a Web Worker which doesn't work well when Vite pre-bundles dependencies.

```js
// vite.config.js or vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  // …other Vite config
  optimizeDeps: {
    exclude: ['@component-hook/pdf-canvas'],
  },
});
```

### Why Is This Necessary?

- Vite's dev server does pre-bundling of dependencies (using esbuild) to improve performance.
- However, modules using Web Workers (like this component) may break or fail to initialize correctly during this pre-bundling stage.

### Web Worker & Vite Known Issue

- This is a known issue: the Vite team is aware of difficulties when optimizing dependencies that use Web Workers.
- For more background, see this GitHub issue: [Vite/Rolldown-Vite #362](https://github.com/vitejs/rolldown-vite/issues/362)
- Once Vite improves its Web Worker optimization, it may become safe to remove this exclusion — but for now, it's required to ensure correct behavior in dev mode.

## License

This project is licensed under the MIT License.
