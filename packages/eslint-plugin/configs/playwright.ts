import { pluginPlaywright } from '../plugins.ts';
import type { PlaywrightRules } from '../typegen/playwright.ts';
import type { Config } from '../types.ts';

export const playwrightConfig: Config<PlaywrightRules> = {
  ...pluginPlaywright.configs['flat/recommended'],
  name: 'component-hook/playwright',
};
