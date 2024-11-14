import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [vue(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/__tests__/unit/**/*.test.ts'],
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      exclude: ['docs/**', '**/*.config.cjs', 'dist/**'],
    },
  },
});
