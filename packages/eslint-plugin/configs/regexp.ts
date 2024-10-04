import type { Linter } from 'eslint';
import { pluginRegexp } from '../plugins';

export const regexpConfig = {
  ...pluginRegexp.configs['flat/recommended'],
  name: 'component-hook/regexp',
} as Linter.Config;
