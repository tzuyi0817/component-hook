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
      'sonarjs/no-vue-bypass-sanitization': 'warn',

      // TypeError: Error while loading at eslint v9.15.0
      'sonarjs/no-empty-function': 'off',
      'sonarjs/no-unused-expressions': 'off',
    },
    settings,
  },
  {
    name: 'component-hook/sonarjs/allow-unused-import',
    files: ['**/*.md/**'],
    plugins,
    rules: {
      'sonarjs/unused-import': 'off',
    },
    settings,
  },
];
