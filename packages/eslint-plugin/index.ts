import { globals } from './plugins';
import pluginJs from './configs/javascript';
import pluginTypescript from './configs/typescript';
import pluginPrettier from './configs/prettier';
import pluginVue from './configs/vue';

const pluginBase = [
  ...pluginJs,
  ...pluginTypescript,
  ...pluginPrettier,
  // pluginSonarjs.configs.recommended,
  // pluginSecurity.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  // {
  //   files: ['**/__tests__/unit/**/*.test.[jt]s?(x)'],
  //   ...compat.extends('plugin:testing-library/vue')[0],
  //   rules: {
  //     // Waiting for eslint-plugin-testing-library to support eslint flat pattern
  //     // 'testing-library/await-async-queries': 'error',
  //     'testing-library/await-async-queries': 'off',

  //     'testing-library/no-await-sync-queries': 'error',

  //     // Waiting for eslint-plugin-testing-library to support eslint flat pattern
  //     // 'testing-library/no-debugging-utils': 'warn',
  //     'testing-library/no-debugging-utils': 'off',

  //     'testing-library/no-dom-import': 'off',
  //   },
  // },
  {
    ignores: [
      '**/node_modules/*',
      '**/dist/*',
      '**/pnpm-lock.yaml',
      '.github/*',
      '**/*.config.ts',
      '**/*.d.ts',
      '**/public/*',
    ],
  },
];

const configs = {
  vue: [...pluginBase, ...pluginVue],
};

export default { configs };
