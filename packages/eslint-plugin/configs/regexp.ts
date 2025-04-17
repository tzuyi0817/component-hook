import { pluginRegexp } from '../plugins';
import type { Linter } from 'eslint';

export const regexpConfig = {
  ...pluginRegexp.configs['flat/recommended'],
  name: 'component-hook/regexp',
} as Linter.Config;
