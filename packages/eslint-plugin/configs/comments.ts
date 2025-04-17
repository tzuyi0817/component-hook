import { configComments } from '../plugins';
import type { Linter } from 'eslint';

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
