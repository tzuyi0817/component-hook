import { globals, pluginJs } from '../plugins';
import type { Config } from '../types';
import type { Linter } from 'eslint';

const rules: Linter.RulesRecord = {
  'no-useless-call': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
  'no-var': 'error',
  'no-console': ['warn', { allow: ['warn', 'error', 'info', 'clear'] }],
  'no-debugger': 'warn',
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
  {
    name: 'component-hook/globals',
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
];
