import type { Linter } from 'eslint';
import { pluginSecurity } from '../plugins';

export const securityConfig: Linter.Config = {
  ...pluginSecurity.configs.recommended,
  name: 'component-hook/security',
};
