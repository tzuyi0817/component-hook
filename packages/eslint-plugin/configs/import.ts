import type { Linter, ESLint } from 'eslint';
import { pluginImport, vueParser, fixupPluginRules, typescriptEslint } from '../plugins';

const plugins: Record<string, ESLint.Plugin> = {
  import: fixupPluginRules(pluginImport),
  '@typescript-eslint': typescriptEslint.plugin as ESLint.Plugin,
};

const languageOptions: Linter.LanguageOptions = {
  parser: vueParser,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
};

export const importConfigs: Linter.Config[] = [
  {
    name: 'component-hook/import',
    plugins,
    languageOptions,
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        },
      ],
      'import/first': 'error',
      'import/no-default-export': 'error',
      'import/no-duplicates': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-named-default': 'error',
      'import/no-self-import': 'error',
      'import/no-webpack-loader-syntax': 'error',
    },
  },
  {
    name: 'component-hook/import/allow-default-export',
    files: [
      '**/*.d.ts',
      '**/*.md/**',
      `**/*config*.?([cm])[jt]s?(x)`,
      `**/{views,pages,routes,middleware,plugins,api}/**/*.?([cm])[jt]s?(x)`,
      `**/{index,vite,esbuild,rollup,rolldown,webpack,rspack}.ts`,
    ],
    plugins,
    languageOptions,
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
