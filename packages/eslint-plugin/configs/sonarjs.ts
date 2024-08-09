import type { Linter } from 'eslint';
import { pluginSonarjs } from '../plugins';

export const sonarjsConfig: Linter.Config = {
  ...pluginSonarjs.configs.recommended,
  name: 'component-hook/sonarjs',
};
