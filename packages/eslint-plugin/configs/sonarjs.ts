import { pluginSonarjs } from '../plugins';
import type { SonarjsRules } from '../typegen/sonarjs';
import type { Config } from '../types';

const plugins = {
  sonarjs: pluginSonarjs,
};

const { settings } = pluginSonarjs.configs.recommended;

export const sonarjsConfigs: Config<SonarjsRules>[] = [
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
