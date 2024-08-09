import type { Linter } from 'eslint';
import { pluginReact } from '../plugins';

export const reactConfig: Linter.Config = {
  ...pluginReact.configs.flat.recommended,
  name: 'component-hook/react',
};
