import { SRC_EXT } from '../constants';
import { fixupPluginRules, pluginImport, typescriptEslint, vueParser } from '../plugins';
import type { ESLint, Linter } from 'eslint';

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
      `**/*config*.${SRC_EXT}`,
      `**/{views,pages,routes,middleware,plugins,api}/**/*.${SRC_EXT}`,
      `**/{index,vite,esbuild,rollup,rolldown,webpack,rspack,farm,unloader}.${SRC_EXT}`,
    ],
    plugins,
    languageOptions,
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
