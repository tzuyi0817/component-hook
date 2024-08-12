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

const pluginBase = [
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
  recommended: pluginBase,
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
