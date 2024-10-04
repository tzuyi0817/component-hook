import type { Linter } from 'eslint';
import { configComments } from '../plugins';

export const commentsConfigs: Linter.Config[] = [
  {
    ...configComments.recommended,
    name: 'component-hook/comments/recommended',
  },
  {
    name: 'component-hook/comments',
    rules: {
      '@eslint-community/eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    },
  },
];
