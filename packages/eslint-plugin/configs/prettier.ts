import { pluginPrettier, pluginPrettierRecommended } from '../plugins.ts';
import type { PrettierRules } from '../typegen/prettier.ts';
import type { Config } from '../types.ts';

const rules = { ...pluginPrettierRecommended.rules };

delete rules['vue/html-self-closing'];

export const prettierConfig: Config<PrettierRules> = {
  name: 'component-hook/prettier',
  plugins: {
    prettier: pluginPrettier,
  },
  rules: {
    ...rules,
    'prettier/prettier': 'warn',
  },
};
