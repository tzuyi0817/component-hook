import { pluginJsxA11y, pluginReact, pluginReactHooks } from '../plugins';
import type { Config } from '../types';

export const reactConfigs: Config[] = [
  {
    ...pluginReact.configs.flat.recommended,
    name: 'component-hook/react',
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReact.configs.flat['jsx-runtime'].rules,
    },
  },
  {
    name: 'component-hook/react-hooks',
    files: ['**/*.[jt]s?(x)'],
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
  {
    ...pluginJsxA11y.flatConfigs.recommended,
    name: 'component-hook/jsx-a11y',
  },
];
