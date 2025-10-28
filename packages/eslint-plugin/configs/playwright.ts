import { pluginPlaywright } from '../plugins';
import type { Config } from '../types';

export const playwrightConfig: Config = {
  ...pluginPlaywright.configs['flat/recommended'],
  name: 'component-hook/playwright',
};
