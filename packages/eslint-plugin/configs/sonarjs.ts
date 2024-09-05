import type { Linter } from 'eslint';
import { pluginSonarjs, fixupPluginRules } from '../plugins';

export const sonarjsConfig: Linter.Config = {
  name: 'component-hook/sonarjs',
  plugins: {
    sonarjs: fixupPluginRules({ rules: pluginSonarjs.rules }),
  },
  rules: {
    ...pluginSonarjs.configs.recommended.rules,
    'sonarjs/no-commented-code': 'warn',
    'sonarjs/no-vue-bypass-sanitization': 'warn',

    // TypeError: Cannot read properties of undefined (reading 'members')
    'sonarjs/prefer-enum-initializers': 'off',

    // TypeError: Cannot read properties of undefined (reading 'some')
    'sonarjs/sonar-no-fallthrough': 'off',
  },
  settings: pluginSonarjs.configs.recommended.settings,
};
