import type { Linter } from 'eslint';
import { configPrettier, pluginPrettier } from '../plugins';

const recommended = pluginPrettier.configs?.recommended as Linter.Config<Linter.RulesRecord>;

export default [
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...configPrettier.rules,
      ...recommended.rules,
      'prettier/prettier': 'off',
    },
  },
] as Linter.Config[];
