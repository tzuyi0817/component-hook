import type { Linter } from 'eslint';
import { pluginPrettier } from '../plugins';

const recommended = pluginPrettier.configs?.recommended as Linter.Config<Linter.RulesRecord>;

export default [
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...recommended.rules,
      'prettier/prettier': 'off',
    },
  },
] as Linter.Config[];
