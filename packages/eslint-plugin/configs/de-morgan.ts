import { pluginDeMorgan } from '../plugins';
import type { Config } from '../types';

export const deMorganConfig: Config = {
  ...pluginDeMorgan.configs.recommended,
  name: 'component-hook/de-morgan',
};
