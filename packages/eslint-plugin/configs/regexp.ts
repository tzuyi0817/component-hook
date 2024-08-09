import type { Linter } from 'eslint';
import { pluginRegexp } from '../plugins';

export default {
  ...pluginRegexp.configs['flat/recommended'],
  name: 'component-hook/regexp',
} as Linter.Config;
