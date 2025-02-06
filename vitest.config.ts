import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [vue(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/__tests__/unit/**/*.test.ts?(x)'],
    exclude: ['packages/create-app/template-*/**', '**/dist', '**/node_modules'],
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      exclude: ['internal', '**/dist', '**/*.config.?(c){js,ts}', 'packages/create-app/template-*/**'],
    },
  },
});
