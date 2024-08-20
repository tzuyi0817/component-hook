import type { Linter } from 'eslint';
import { pluginMarkdown } from '../plugins';

export const markdownConfigs: Linter.Config[] = [
  ...pluginMarkdown.configs.recommended.map((config: Linter.Config) => {
    const { name, rules } = config;
    const baseConfig = {
      ...config,
      name: `component-hook/${name}`,
    };

    if (rules) {
      baseConfig.rules = {
        ...rules,
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',

        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',

        'import/no-default-export': 'off',
      };
    }
    return baseConfig;
  }),
];
