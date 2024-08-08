import type { Linter } from 'eslint';
import { pluginPlaywright } from '../plugins';

export default [
  {
    ...pluginPlaywright.configs['flat/recommended'],
    name: 'component-hook/playwright',
  },
] as Linter.Config[];
