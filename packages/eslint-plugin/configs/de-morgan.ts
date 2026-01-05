import { pluginDeMorgan } from '../plugins';
import type { DeMorganRules } from '../typegen/de-morgan';
import type { Config } from '../types';

export const deMorganConfig: Config<DeMorganRules> = {
  ...pluginDeMorgan.configs.recommended,
  name: 'component-hook/de-morgan',
};
