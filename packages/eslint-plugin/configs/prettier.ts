import { pluginPrettier, pluginPrettierRecommended } from '../plugins.ts';
import type { PrettierRules } from '../typegen/prettier.ts';
import type { Config } from '../types.ts';

const rules = Object.fromEntries(
  Object.entries(pluginPrettierRecommended.rules ?? {}).filter(([name]) => name !== 'vue/html-self-closing'),
);

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
