import { pluginJs } from '../plugins';

const isProduction = process.env.NODE_ENV === 'production';

const rules = {
  'no-var': 'error',
  'no-console': isProduction ? 'warn' : 'off',
  'no-debugger': isProduction ? 'warn' : 'off',
  'no-eval': 'error',
  'no-loop-func': 'error',
  'no-dupe-class-members': 'error',
  'no-duplicate-imports': 'error',
  'object-shorthand': 'error',
  'prefer-const': 'error',
  'prefer-template': 'error',
  eqeqeq: 'error',
};

export const jsConfigs = [
  {
    name: 'component-hook/javascript',
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...rules,
    },
  },
];
