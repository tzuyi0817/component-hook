import path from 'node:path';
import fs from 'node:fs';
import { defineConfig, type Plugin } from 'vite';
import dts from 'vite-plugin-dts';
import { FRAMEWORK, vitePlugin, libEntry, outDir, rollupGlobals, rollupExternal } from '../../internal/build-config';

const patchCssFile: Plugin = {
  name: 'patch-css-file',
  apply: 'build',
  writeBundle(_, bundle) {
    const file = 'picker.es.js';

    if (!bundle[file]) return;
    const outDir = path.resolve('dist');
    const filePath = path.resolve(outDir, `${FRAMEWORK}/${file}`);
    const content = fs.readFileSync(filePath, 'utf-8');

    fs.writeFileSync(filePath, `import "./index.css";\n${content}`);
  },
};

export default defineConfig({
  plugins: [
    vitePlugin(),
    dts({
      rollupTypes: true,
    }),
    patchCssFile,
  ],
  base: './',
  optimizeDeps: {
    include: ['typescript'],
  },
  build: {
    lib: {
      entry: libEntry,
      name: 'picker',
      fileName: format => `picker.${format}.js`,
    },
    outDir,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
        globals: rollupGlobals,
      },
      external: rollupExternal,
    },
  },
});
