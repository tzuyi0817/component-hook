import { globals } from './plugins';
import { jsConfigs } from './configs/javascript';
import { typescriptConfigs } from './configs/typescript';
import { importConfigs } from './configs/import';
import { markdownConfigs } from './configs/markdown';
import { regexpConfig } from './configs/regexp';
import { prettierConfig } from './configs/prettier';
import { sonarjsConfig } from './configs/sonarjs';
import { securityConfig } from './configs/security';
import { reactConfig } from './configs/react';
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

const pluginBasic = [
  ...jsConfigs,
  ...typescriptConfigs,
  ...importConfigs,
  regexpConfig,
  prettierConfig,
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
  basic: pluginBasic,
  react: reactConfig,
  vue: vueConfigs,
  markdown: markdownConfigs,
  sonarjs: sonarjsConfig,
  security: securityConfig,
  playwright: playwrightConfig,
  'testing-library/dom': testingLibraryDomConfig,
  'testing-library/vue': testingLibraryVueConfig,
  'testing-library/react': testingLibraryReactConfig,
  'testing-library/angular': testingLibraryAngularConfig,
  'testing-library/marko': testingLibraryMarkoConfig,
};

export default { configs };

const recommendedBasic = [...markdownConfigs, sonarjsConfig, securityConfig];

export const reactRecommended = [...pluginBasic, ...reactConfig, ...recommendedBasic];
export const vueRecommended = [...pluginBasic, ...vueConfigs, ...recommendedBasic];
export const vueSkyline = [
  ...vueRecommended,
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
