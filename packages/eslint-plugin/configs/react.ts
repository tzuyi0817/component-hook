import type { Linter } from 'eslint';
import { pluginReact, pluginReactHooks, pluginJsxA11y, fixupPluginRules } from '../plugins';

export const reactConfig: Linter.Config[] = [
  {
    ...pluginReact.configs.flat.recommended,
    name: 'component-hook/react',
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    name: 'component-hook/react-hooks',
    files: ['**/*.[jt]s?(x)'],
    plugins: {
      'react-hooks': fixupPluginRules({ rules: pluginReactHooks.rules }),
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
