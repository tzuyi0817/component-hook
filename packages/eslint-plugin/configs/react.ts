import type { Linter } from 'eslint';
import { pluginReact, pluginReactHooks, pluginJsxA11y } from '../plugins';

export const reactConfigs: Linter.Config[] = [
  {
    ...pluginReact.configs.recommended,
    name: 'component-hook/react',
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ...pluginReactHooks.configs.recommended,
    name: 'component-hook/react-hooks',
    files: ['**/*.[jt]s?(x)'],
  },
  {
    ...pluginJsxA11y.flatConfigs.recommended,
    name: 'component-hook/jsx-a11y',
  },
];
