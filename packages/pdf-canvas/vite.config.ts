import { defineConfig, type PluginOption } from 'vite';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';
import { vitePlugin, libEntry, outDir, rollupGlobals, rollupExternal } from '../../internal/build-config';

export default defineConfig({
  plugins: [vitePlugin(), dts({ rollupTypes: true }), visualizer({ gzipSize: true }) as PluginOption],
  base: './',
  optimizeDeps: {
    include: ['typescript'],
  },
  build: {
    lib: {
      entry: libEntry,
      name: 'pdf-canvas',
      fileName: format => `pdf-canvas.${format}.js`,
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
