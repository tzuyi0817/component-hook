import { pluginDeMorgan } from '../plugins.ts';
import type { DeMorganRules } from '../typegen/de-morgan.ts';
import type { Config } from '../types.ts';

export const deMorganConfig: Config<DeMorganRules> = {
  ...pluginDeMorgan.configs.recommended,
  name: 'component-hook/de-morgan',
};
