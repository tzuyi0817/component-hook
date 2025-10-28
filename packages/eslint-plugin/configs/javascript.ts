import { pluginJs } from '../plugins';
import type { Config } from '../types';
import type { Linter } from 'eslint';

const isProduction = process.env.NODE_ENV === 'production';

const rules: Linter.RulesRecord = {
  'no-useless-call': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
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

export const jsConfigs: Config[] = [
  {
    name: 'component-hook/javascript',
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...rules,
    },
  },
];
