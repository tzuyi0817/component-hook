import { pluginJs } from '../plugins';

const isProduction = process.env.NODE_ENV === 'production';

const rules = {
  'no-var': 'error',
  'no-console': isProduction ? 'warn' : 'off',
  'no-debugger': isProduction ? 'warn' : 'off',
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
};

export default [
  {
    name: 'component-hook/javascript',
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...rules,
    },
  },
];
