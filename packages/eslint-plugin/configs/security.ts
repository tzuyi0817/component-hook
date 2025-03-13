import { pluginSecurity } from '../plugins';

export const securityConfig = {
  name: 'component-hook/security',
  plugins: {
    security: pluginSecurity,
  },
  rules: {
    ...pluginSecurity.configs.recommended.rules,
    'security/detect-object-injection': 'off',
  },
};
