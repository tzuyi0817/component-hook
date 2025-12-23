import { commentsConfigs } from './configs/comments';
import { deMorganConfig } from './configs/de-morgan';
import { ignores } from './configs/ignores';
import { importConfigs } from './configs/import';
import { jsConfigs } from './configs/javascript';
import { jsdocConfig } from './configs/jsdoc';
import { jsoncConfigs } from './configs/jsonc';
import { markdownConfigs } from './configs/markdown';
import { perfectionistConfig } from './configs/perfectionist';
import { playwrightConfig } from './configs/playwright';
import { prettierConfig } from './configs/prettier';
import { reactConfigs } from './configs/react';
import { regexpConfig } from './configs/regexp';
import { securityConfig } from './configs/security';
import { sonarjsConfigs } from './configs/sonarjs';
import {
  testingLibraryAngularConfig,
  testingLibraryDomConfig,
  testingLibraryMarkoConfig,
  testingLibraryReactConfig,
  testingLibraryVueConfig,
} from './configs/testing-library';
import { typescriptConfigs } from './configs/typescript';
import { unicornConfigs } from './configs/unicorn';
import { vueConfigs } from './configs/vue';
import { globals } from './plugins';

const basicConfigs = [
  ...jsConfigs,
  ...typescriptConfigs,
  ...commentsConfigs,
  ...importConfigs,
  ...unicornConfigs,
  jsdocConfig,
  regexpConfig,
  deMorganConfig,
  perfectionistConfig,
  ...jsoncConfigs,
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

const basicPreset = [prettierConfig, ...sonarjsConfigs, securityConfig, ...markdownConfigs];

export const reactPreset = [...basicConfigs, ...reactConfigs, ...basicPreset];

export const vuePreset = [...basicConfigs, ...vueConfigs, ...basicPreset];
