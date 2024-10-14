import { globals } from './plugins';
import { jsConfigs } from './configs/javascript';
import { typescriptConfigs } from './configs/typescript';
import { importConfigs } from './configs/import';
import { unicornConfig } from './configs/unicorn';
import { markdownConfigs } from './configs/markdown';
import { regexpConfig } from './configs/regexp';
import { prettierConfig } from './configs/prettier';
import { commentsConfigs } from './configs/comments';
import { sonarjsConfigs } from './configs/sonarjs';
import { securityConfig } from './configs/security';
import { reactConfigs } from './configs/react';
import { vueConfigs } from './configs/vue';
import { playwrightConfig } from './configs/playwright';
import {
  testingLibraryDomConfig,
  testingLibraryAngularConfig,
  testingLibraryMarkoConfig,
  testingLibraryReactConfig,
  testingLibraryVueConfig,
} from './configs/testing-library';
import { ignores } from './configs/ignores';

const basicConfigs = [
  ...jsConfigs,
  ...typescriptConfigs,
  ...commentsConfigs,
  ...importConfigs,
  unicornConfig,
  regexpConfig,
  {
    name: 'component-hook/globals',
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  ignores,
];

const configs = {
  basic: basicConfigs,
  react: reactConfigs,
  vue: vueConfigs,
  markdown: markdownConfigs,
  prettier: prettierConfig,
  sonarjs: sonarjsConfigs,
  security: securityConfig,
  playwright: playwrightConfig,
  'testing-library/dom': testingLibraryDomConfig,
  'testing-library/vue': testingLibraryVueConfig,
  'testing-library/react': testingLibraryReactConfig,
  'testing-library/angular': testingLibraryAngularConfig,
  'testing-library/marko': testingLibraryMarkoConfig,
};

export default { configs };

const basicPreset = [...markdownConfigs, prettierConfig, ...sonarjsConfigs, securityConfig];

export const reactPreset = [...basicConfigs, ...reactConfigs, ...basicPreset];
export const vuePreset = [...basicConfigs, ...vueConfigs, ...basicPreset];
export const vueSkyline = [
  ...vuePreset,
  {
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
    },
  },
  {
    files: ['**/__tests__/unit/**/*.test.[jt]s?(x)'],
    ...testingLibraryVueConfig,
  },
  {
    files: ['**/__tests__/e2e/**/*.spec.[jt]s?(x)'],
    ...playwrightConfig,
  },
];
