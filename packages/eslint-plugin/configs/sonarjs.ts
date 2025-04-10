import type { Linter, ESLint } from 'eslint';
import { pluginSonarjs } from '../plugins';

const plugins: Record<string, ESLint.Plugin> = {
  sonarjs: pluginSonarjs,
};

const { settings } = pluginSonarjs.configs.recommended;

export const sonarjsConfigs: Linter.Config[] = [
  {
    name: 'component-hook/sonarjs',
    plugins,
    rules: {
      ...pluginSonarjs.configs.recommended.rules,
      'sonarjs/no-commented-code': 'warn',
    },
    settings,
  },
  {
    name: 'component-hook/sonarjs/allow-in-markdown',
    files: ['**/*.md/**'],
    plugins,
    rules: {
      'sonarjs/unused-import': 'off',
      'sonarjs/no-unused-vars': 'off',
    },
    settings,
  },
];
