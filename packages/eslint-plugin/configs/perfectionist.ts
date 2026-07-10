import { pluginPerfectionist } from '../plugins.ts';
import type { PerfectionistRules } from '../typegen/perfectionist.ts';
import type { Config } from '../types.ts';

export const perfectionistConfig: Config<PerfectionistRules> = {
  name: 'component-hook/perfectionist/imports',
  plugins: {
    perfectionist: pluginPerfectionist,
  },
  rules: {
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'subpath',
          'sibling',
          'index',
          'style',
          'type',
          'side-effect',
          'side-effect-style',
        ],
        internalPattern: ['^[~@#]/.*'],
        newlinesBetween: 'ignore',
        type: 'natural',
      },
    ],
    'perfectionist/sort-named-exports': [
      'warn',
      {
        groups: ['value-export', 'type-export'],
        type: 'natural',
      },
    ],
    'perfectionist/sort-named-imports': [
      'warn',
      {
        groups: ['value-import', 'type-import'],
        type: 'natural',
      },
    ],
  },
};
