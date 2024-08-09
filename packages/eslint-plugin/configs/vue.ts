import type { Linter } from 'eslint';
import { pluginVue, vueParser, typescriptEslint } from '../plugins';
import { rules as pluginTypescriptRules } from './typescript';

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
};

const extendsTypescript = typescriptEslint.configs.recommended
  .filter(({ name }) => name !== 'typescript-eslint/base')
  .map(config => ({ ...config, name: `component-hook/vue/${config.name}` }));

const eslintConfigTypescript = typescriptEslint.config({
  extends: extendsTypescript,
  files: ['**/*.vue'],
  name: 'component-hook/vue/typescript',
  rules: pluginTypescriptRules,
});

export const vueConfigs = [
  ...eslintConfigTypescript,
  {
    name: 'component-hook/vue/globals',
    languageOptions: {
      globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        defineModel: 'readonly',
        withDefaults: 'readonly',
        $: 'readonly',
        $$: 'readonly',
        $computed: 'readonly',
        $customRef: 'readonly',
        $ref: 'readonly',
        $shallowRef: 'readonly',
        $toRef: 'readonly',
      },
    },
  },
  {
    name: 'component-hook/vue',
    files: ['**/*.vue'],
    plugins: {
      '@typescript-eslint': typescriptEslint.plugin,
      vue: pluginVue,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    processor: pluginVue.processors['.vue'],
    rules: {
      ...pluginVue.configs.base.rules,
      ...pluginVue.configs['vue3-essential'].rules,
      ...pluginVue.configs['vue3-strongly-recommended'].rules,
      ...pluginVue.configs['vue3-recommended'].rules,
      ...rules,
    },
  },
] as Linter.Config[];
