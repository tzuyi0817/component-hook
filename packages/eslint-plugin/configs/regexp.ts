import { pluginRegexp } from '../plugins.ts';
import type { RegexpRules } from '../typegen/regexp.ts';
import type { Config } from '../types.ts';

export const regexpConfig: Config<RegexpRules> = {
  ...pluginRegexp.configs['flat/recommended'],
  name: 'component-hook/regexp',
};
