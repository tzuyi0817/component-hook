import { basic, ignorePatterns, react, vue } from '@component-hook/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [basic, react, vue],
  env: {
    builtin: true,
    browser: true,
    node: true,
  },
  ignorePatterns: [...ignorePatterns, '**/typegen/**', 'packages/oxlint-config/generated/**'],
  rules: {
    'unicorn/prefer-blob-reading-methods': 'warn',
  },
  overrides: [
    {
      files: ['**/*.[jt]s', '**/*.[jt]sx'],
      rules: {
        'react/refs': 'warn',
        'react/exhaustive-deps': 'warn',
        'react/set-state-in-effect': 'warn',
        'react/purity': 'warn',
      },
    },
  ],
});
