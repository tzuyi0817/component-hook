import { pluginJs } from '../plugins';

const rules = {
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
};

export default [pluginJs.configs.recommended, { files: ['**/*.js', '**/*.jsx'] }, { rules }];
