import type { Linter } from 'eslint';
import { pluginSonarjs } from '../plugins';

export default {
  ...pluginSonarjs.configs.recommended,
  name: 'component-hook/sonarjs',
} as Linter.Config;
