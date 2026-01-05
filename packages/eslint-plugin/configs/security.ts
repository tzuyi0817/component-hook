import { pluginSecurity } from '../plugins';
import type { SecurityRules } from '../typegen/security';
import type { Config } from '../types';

export const securityConfig: Config<SecurityRules> = {
  name: 'component-hook/security',
  plugins: {
    security: pluginSecurity,
  },
  rules: {
    ...pluginSecurity.configs.recommended.rules,
    'security/detect-object-injection': 'off',
  },
};
