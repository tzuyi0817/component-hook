import { pluginSonarjs, type SonarjsConfigs } from '../plugins.ts';
import type { SonarjsRules } from '../typegen/sonarjs.ts';
import type { Config } from '../types.ts';

const plugins = {
  sonarjs: pluginSonarjs,
};

const recommended: SonarjsConfigs['recommended'] = pluginSonarjs.configs?.recommended;

const { settings } = recommended;

export const sonarjsConfigs: Config<SonarjsRules>[] = [
  {
    name: 'component-hook/sonarjs',
    plugins,
    rules: {
      ...recommended.rules,
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
