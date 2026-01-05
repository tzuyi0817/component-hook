import { pluginRegexp } from '../plugins';
import type { RegexpRules } from '../typegen/regexp';
import type { Config } from '../types';

export const regexpConfig: Config<RegexpRules> = {
  ...pluginRegexp.configs['flat/recommended'],
  name: 'component-hook/regexp',
};
