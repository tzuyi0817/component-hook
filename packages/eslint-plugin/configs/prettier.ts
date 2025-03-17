import type { Linter } from 'eslint';
import { pluginPrettier, pluginPrettierRecommended } from '../plugins';

const rules = { ...pluginPrettierRecommended.rules };

delete rules['vue/html-self-closing'];

export const prettierConfig: Linter.Config = {
  name: 'component-hook/prettier',
  plugins: {
    prettier: pluginPrettier,
  },
  rules: {
    ...rules,
    'prettier/prettier': 'warn',
  },
};
