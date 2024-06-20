import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginSonarjs from 'eslint-plugin-sonarjs';
import pluginSecurity from 'eslint-plugin-security';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  ...pluginVue.configs['flat/recommended'],
  pluginJs.configs.recommended,
  ...compat.extends('@vue/eslint-config-typescript/recommended'),
  ...compat.extends('@vue/eslint-config-prettier/skip-formatting'),
  pluginSonarjs.configs.recommended,
  pluginSecurity.configs.recommended,
  { files: ['**/*.js', '**/*./ts', '**/*.vue'] },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
        ...globals.browser,
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        defineModel: 'readonly',
        withDefaults: 'readonly',
      },
    },
    rules: {
      'no-var': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-trailing-spaces': 'error',
      'no-eval': 'error',
      'no-loop-func': 'error',
      'no-new-object': 'error',
      'no-dupe-class-members': 'error',
      'no-duplicate-imports': 'error',
      'object-shorthand': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'space-before-blocks': 'error',
      'arrow-spacing': 'error',
      'comma-dangle': ['error', 'only-multiline'],
      'eol-last': ['error', 'always'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      eqeqeq: 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
      'vue/multi-word-component-names': 'warn',
    },
  },
  {
    files: ['**/__tests__/unit/**/*.test.[jt]s?(x)'],
    ...compat.extends('plugin:testing-library/vue')[0],
    rules: {
      // Waiting for eslint-plugin-testing-library to support eslint flat pattern
      // 'testing-library/await-async-queries': 'error',
      'testing-library/await-async-queries': 'off',

      'testing-library/no-await-sync-queries': 'error',

      // Waiting for eslint-plugin-testing-library to support eslint flat pattern
      // 'testing-library/no-debugging-utils': 'warn',
      'testing-library/no-debugging-utils': 'off',

      'testing-library/no-dom-import': 'off',
    },
  },
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
