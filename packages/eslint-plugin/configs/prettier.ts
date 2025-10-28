import { pluginPrettier, pluginPrettierRecommended } from '../plugins';
import type { Config } from '../types';

const rules = { ...pluginPrettierRecommended.rules };

delete rules['vue/html-self-closing'];

export const prettierConfig: Config = {
  name: 'component-hook/prettier',
  plugins: {
    prettier: pluginPrettier,
  },
  rules: {
    ...rules,
    'prettier/prettier': 'warn',
  },
};
