import { commentsConfigs } from './configs/comments.ts';
import { deMorganConfig } from './configs/de-morgan.ts';
import { ignores } from './configs/ignores.ts';
import { importConfigs } from './configs/import.ts';
import { jsConfigs } from './configs/javascript.ts';
import { jsdocConfig } from './configs/jsdoc.ts';
import { jsoncConfigs } from './configs/jsonc.ts';
import { markdownConfigs } from './configs/markdown.ts';
import { perfectionistConfig } from './configs/perfectionist.ts';
import { playwrightConfig } from './configs/playwright.ts';
import { prettierConfig } from './configs/prettier.ts';
import { reactConfigs } from './configs/react.ts';
import { regexpConfig } from './configs/regexp.ts';
import { securityConfig } from './configs/security.ts';
import { sonarjsConfigs } from './configs/sonarjs.ts';
import {
  testingLibraryAngularConfig,
  testingLibraryDomConfig,
  testingLibraryMarkoConfig,
  testingLibraryReactConfig,
  testingLibraryVueConfig,
} from './configs/testing-library.ts';
import { typescriptConfigs } from './configs/typescript.ts';
import { unicornConfigs } from './configs/unicorn.ts';
import { vueConfigs } from './configs/vue.ts';
import { yamlConfigs } from './configs/yaml.ts';

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
  ...yamlConfigs,
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
