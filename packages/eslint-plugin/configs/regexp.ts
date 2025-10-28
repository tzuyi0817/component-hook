import { pluginRegexp } from '../plugins';
import type { Config } from '../types';

export const regexpConfig: Config = {
  ...pluginRegexp.configs['flat/recommended'],
  name: 'component-hook/regexp',
};
