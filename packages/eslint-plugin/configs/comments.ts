import { configComments } from '../plugins.ts';
import type { CommentsRules } from '../typegen/comments.ts';
import type { Config } from '../types.ts';

export const commentsConfigs: Config<CommentsRules>[] = [
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
