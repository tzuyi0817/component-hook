import type { Linter } from 'eslint';
import { pluginRegexp } from '../plugins';

export const regexpConfig: Linter.Config = {
  ...pluginRegexp.configs['flat/recommended'],
  name: 'component-hook/regexp',
};
