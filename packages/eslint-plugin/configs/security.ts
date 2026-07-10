import { pluginSecurity } from '../plugins.ts';
import type { SecurityRules } from '../typegen/security.ts';
import type { Config } from '../types.ts';

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
