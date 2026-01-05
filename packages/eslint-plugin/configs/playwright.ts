import { pluginPlaywright } from '../plugins';
import type { PlaywrightRules } from '../typegen/playwright';
import type { Config } from '../types';

export const playwrightConfig: Config<PlaywrightRules> = {
  ...pluginPlaywright.configs['flat/recommended'],
  name: 'component-hook/playwright',
};
