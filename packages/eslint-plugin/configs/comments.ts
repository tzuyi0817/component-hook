import { configComments } from '../plugins';
import type { Config } from '../types';

export const commentsConfigs: Config[] = [
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
