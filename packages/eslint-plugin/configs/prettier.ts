import type { Linter } from 'eslint';
import { pluginPrettier, configPrettier, pluginPrettierRecommended } from '../plugins';

export const prettierConfig: Linter.Config = {
  name: 'component-hook/prettier',
  plugins: {
    prettier: pluginPrettier,
  },
  rules: {
    ...configPrettier.rules,
    ...pluginPrettierRecommended.rules,
    'prettier/prettier': 'warn',
  },
};
