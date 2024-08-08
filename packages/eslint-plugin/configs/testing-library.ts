import type { Linter } from 'eslint';
import { pluginTestingLibrary, fixupPluginRules } from '../plugins';

const configs = pluginTestingLibrary.configs;
const plugins = {
  'testing-library': fixupPluginRules({ rules: pluginTestingLibrary.rules }),
};
const rules = {
  'testing-library/await-async-queries': 'error',
  'testing-library/no-await-sync-queries': 'error',
  'testing-library/no-debugging-utils': 'warn',
  'testing-library/no-dom-import': 'off',
};

export const pluginTestingLibraryDom: Linter.Config = {
  name: 'component-hook/testing-library/dom',
  plugins,
  rules: {
    ...configs.dom.rules,
    ...rules,
  },
};

export const pluginTestingLibraryAngular: Linter.Config = {
  name: 'component-hook/testing-library/angular',
  plugins,
  rules: {
    ...configs.angular.rules,
    ...rules,
  },
};

export const pluginTestingLibraryReact: Linter.Config = {
  name: 'component-hook/testing-library/react',
  plugins,
  rules: {
    ...configs.react.rules,
    ...rules,
  },
};

export const pluginTestingLibraryVue: Linter.Config = {
  name: 'component-hook/testing-library/vue',
  plugins,
  rules: {
    ...configs.vue.rules,
    ...rules,
  },
};

export const pluginTestingLibraryMarko: Linter.Config = {
  name: 'component-hook/testing-library/marko',
  plugins,
  rules: {
    ...configs.marko.rules,
    ...rules,
  },
};
