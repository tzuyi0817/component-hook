import type { Linter } from 'eslint';
import { pluginPlaywright } from '../plugins';

export const playwrightConfig: Linter.Config = {
  ...pluginPlaywright.configs['flat/recommended'],
  name: 'component-hook/playwright',
};
