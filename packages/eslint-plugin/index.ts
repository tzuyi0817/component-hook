import { globals } from './plugins';
import pluginJs from './configs/javascript';
import pluginTypescript from './configs/typescript';
import pluginPrettier from './configs/prettier';
import pluginSonarjs from './configs/sonarjs';
import pluginSecurity from './configs/security';
import pluginVue from './configs/vue';
import pluginPlaywright from './configs/playwright';
import {
  pluginTestingLibraryDom,
  pluginTestingLibraryVue,
  pluginTestingLibraryReact,
  pluginTestingLibraryAngular,
  pluginTestingLibraryMarko,
} from './configs/testing-library';
import ignores from './configs/ignores';

const pluginBase = [
  ...pluginJs,
  ...pluginTypescript,
  ...pluginPrettier,
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
  vue: pluginVue,
  sonarjs: pluginSonarjs,
  security: pluginSecurity,
  playwright: pluginPlaywright,
  ['testing-library/dom']: pluginTestingLibraryDom,
  ['testing-library/vue']: pluginTestingLibraryVue,
  ['testing-library/react']: pluginTestingLibraryReact,
  ['testing-library/angular']: pluginTestingLibraryAngular,
  ['testing-library/marko']: pluginTestingLibraryMarko,
};

export default { configs };
