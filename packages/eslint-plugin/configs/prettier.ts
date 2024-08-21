import type { Linter } from 'eslint';
import { pluginPrettier, configPrettier } from '../plugins';

const recommended = pluginPrettier.configs?.recommended as Linter.Config<Linter.RulesRecord>;

export const prettierConfig: Linter.Config = {
  name: 'component-hook/prettier',
  plugins: {
    prettier: pluginPrettier,
  },
  rules: {
    ...configPrettier.rules,
    ...recommended.rules,
    'prettier/prettier': 'warn',
  },
};
