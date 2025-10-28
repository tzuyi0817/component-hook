import { pluginSecurity } from '../plugins';
import type { Config } from '../types';

export const securityConfig: Config = {
  name: 'component-hook/security',
  plugins: {
    security: pluginSecurity,
  },
  rules: {
    ...pluginSecurity.configs.recommended.rules,
    'security/detect-object-injection': 'off',
  },
};
