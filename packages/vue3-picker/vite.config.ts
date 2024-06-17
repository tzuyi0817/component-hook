import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      rollupTypes: true,
    }),
  ],
  base: "./",
  optimizeDeps: {
    include: [
      'typescript',
    ],
  },
  build: {
    lib: {
      entry: 'index.ts',
      name: 'vue3-picker',
      fileName: (format) => `vue3-picker.${format}.js`,
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
        globals: {
          vue: 'Vue',
        },
      },
      external: ['vue'],
    }
  }
})
