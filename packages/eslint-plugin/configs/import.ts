import { SRC_EXT } from '../constants';
import { pluginImport, typescriptEslint, vueParser } from '../plugins';
import type { ImportRules } from '../typegen/import';
import type { Config } from '../types';

const plugins = {
  import: pluginImport,
  '@typescript-eslint': typescriptEslint.plugin,
};

const languageOptions = {
  parser: vueParser,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
};

export const importConfigs: Config<ImportRules>[] = [
  {
    name: 'component-hook/import',
    plugins,
    languageOptions,
    rules: {
      'import/first': 'error',
      'import/no-default-export': 'error',
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
      'import/no-duplicates-specifier': 'error',
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
      `**/{views,pages,routes,middleware,plugins,api,modules}/**/*.${SRC_EXT}`,
      `**/{index,vite,esbuild,rollup,rolldown,webpack,rspack,farm,unloader,nuxt}.${SRC_EXT}`,
    ],
    plugins,
    languageOptions,
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
