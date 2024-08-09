import type { Linter } from 'eslint';
import { pluginSecurity } from '../plugins';

export default {
  ...pluginSecurity.configs.recommended,
  name: 'component-hook/security',
} as Linter.Config;
