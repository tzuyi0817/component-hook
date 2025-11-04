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

      'react-hooks/refs': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/purity': 'warn',
    },
  },
  {
    ...pluginJsxA11y.flatConfigs.recommended,
    name: 'component-hook/jsx-a11y',
  },
];
