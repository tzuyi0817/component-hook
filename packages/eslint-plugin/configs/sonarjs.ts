import type { Linter, ESLint } from 'eslint';
import { pluginSonarjs, fixupPluginRules } from '../plugins';

const plugins: Record<string, ESLint.Plugin> = {
  sonarjs: fixupPluginRules(pluginSonarjs),
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

      // TypeError: Cannot read properties of undefined (reading 'members')
      'sonarjs/prefer-enum-initializers': 'off',

      // TypeError: Cannot read properties of undefined (reading 'some')
      'sonarjs/sonar-no-fallthrough': 'off',
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
