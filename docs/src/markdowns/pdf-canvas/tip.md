::: tip ⚠️ Required Vite Configuration

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

##### Why Is This Necessary?

- Vite's dev server does pre-bundling of dependencies (using esbuild) to improve performance.
- However, modules using Web Workers (like this component) may break or fail to initialize correctly during this pre-bundling stage.

##### Web Worker & Vite Known Issue

- This is a known issue: the Vite team is aware of difficulties when optimizing dependencies that use Web Workers.
- For more background, see this GitHub issue: [Vite/Rolldown-Vite #362](https://github.com/vitejs/rolldown-vite/issues/362)
- Once Vite improves its Web Worker optimization, it may become safe to remove this exclusion — but for now, it's required to ensure correct behavior in dev mode.

:::
