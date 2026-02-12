import { VUE } from '../constants';
import { pluginVue, typescriptEslint, vueParser } from '../plugins';
import { typescriptCoreConfig } from './typescript';
import type { VueRules } from '../typegen/vue';
import type { Config } from '../types';

const recommendedRules = pluginVue.configs['flat/recommended']
  .map(config => config.rules)
  .reduce((acc, rules) => ({ ...acc, ...rules }), {});

const rules = {
  'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
  'vue/custom-event-name-casing': ['error', 'camelCase'],
  'vue/eqeqeq': ['error', 'smart'],
  'vue/html-self-closing': [
    'error',
    {
      html: {
        component: 'always',
        normal: 'never',
        void: 'always',
      },
      math: 'always',
      svg: 'always',
    },
  ],
  'vue/max-attributes-per-line': 'off',
  'vue/multi-word-component-names': 'off',
  'vue/no-constant-condition': 'warn',
  'vue/no-empty-pattern': 'error',
  'vue/no-loss-of-precision': 'error',
  'vue/no-ref-as-operand': 'off',
  'vue/no-unused-refs': 'error',
  'vue/no-useless-v-bind': 'error',
  'vue/no-v-html': 'off',
  'vue/object-shorthand': [
    'error',
    'always',
    {
      avoidQuotes: true,
      ignoreConstructors: false,
    },
  ],
  'vue/one-component-per-file': 'off',
  'vue/padding-line-between-blocks': ['error', 'always'],
  'vue/prefer-template': 'error',
  'vue/require-default-prop': 'off',
  'vue/require-prop-types': 'off',
  'vue/no-setup-props-reactivity-loss': 'off',
  'vue/return-in-computed-property': ['error', { treatUndefinedAsUnspecified: false }],
} satisfies VueRules;

const eslintVueTypescript = typescriptCoreConfig
  .filter(({ name }) => name !== 'component-hook/typescript > typescript-eslint/base')
  .map(config => ({
    ...config,
    files: [VUE],
    name: `component-hook/vue/${config.name?.replace('component-hook/', '')}`,
  }));

export const vueConfigs = [
  ...eslintVueTypescript,
  {
    name: 'component-hook/vue',
    files: [VUE],
    plugins: {
      '@typescript-eslint': typescriptEslint.plugin,
      vue: pluginVue,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptEslint.parser,
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    processor: pluginVue.processors['.vue'],
    rules: {
      ...recommendedRules,
      'no-useless-assignment': 'off',
      ...rules,
    },
  },
] as Config<VueRules>[];
