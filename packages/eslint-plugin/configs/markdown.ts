import { SRC, VUE } from '../constants';
import { pluginMarkdown } from '../plugins';
import type { Config } from '../types';

export const markdownConfigs: Config[] = [
  ...pluginMarkdown.configs.processor.map(config => ({
    ...(config as Config),
    name: `component-hook/${config.name}`,
  })),

  {
    files: [`**/*.md/${SRC}`, `**/*.md/${VUE}`],
    name: 'component-hook/markdown-rules',
    rules: {
      'no-alert': 'off',
      'no-console': 'off',
      'no-restricted-imports': 'off',
      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',

      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'off',

      'import/no-default-export': 'off',

      'sonarjs/no-dead-store': 'off',
      'sonarjs/unused-import': 'off',
      'sonarjs/no-unused-vars': 'off',

      'unicorn/no-useless-undefined': 'off',
      'unicorn/no-anonymous-default-export': 'off',
    },
  },
];
