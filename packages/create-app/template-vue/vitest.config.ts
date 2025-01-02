/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url';
import { mergeConfig, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['src/__tests__/unit/**/*.test.ts'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      setupFiles: ['src/__tests__/setup/unit-test.ts'],
      coverage: {
        provider: 'v8',
        include: ['!src/main.ts', 'src/**/*.ts', 'src/**/*.vue'],
      },
    },
  }),
);
