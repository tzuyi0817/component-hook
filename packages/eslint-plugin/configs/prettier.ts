import type { Linter } from 'eslint';
import { pluginPrettier } from '../plugins';

const recommended = pluginPrettier.configs?.recommended as Linter.Config<Linter.RulesRecord>;

export const prettierConfig: Linter.Config = {
  name: 'component-hook/prettier',
  plugins: {
    prettier: pluginPrettier,
  },
  rules: {
    ...recommended.rules,
    'prettier/prettier': 'off',
  },
};
