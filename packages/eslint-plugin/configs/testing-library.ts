import type { Linter } from 'eslint';
import { pluginTestingLibrary } from '../plugins';

const configs = pluginTestingLibrary.configs;
const plugins = {
  'testing-library': pluginTestingLibrary,
};

export const testingLibraryDomConfig: Linter.Config = {
  name: 'component-hook/testing-library/dom',
  plugins,
  rules: {
    ...configs['flat/dom'].rules,
  },
};

export const testingLibraryAngularConfig: Linter.Config = {
  name: 'component-hook/testing-library/angular',
  plugins,
  rules: {
    ...configs['flat/angular'].rules,
  },
};

export const testingLibraryReactConfig: Linter.Config = {
  name: 'component-hook/testing-library/react',
  plugins,
  rules: {
    ...configs['flat/react'].rules,
  },
};

export const testingLibraryVueConfig: Linter.Config = {
  name: 'component-hook/testing-library/vue',
  plugins,
  rules: {
    ...configs['flat/vue'].rules,
  },
};

export const testingLibraryMarkoConfig: Linter.Config = {
  name: 'component-hook/testing-library/marko',
  plugins,
  rules: {
    ...configs['flat/marko'].rules,
  },
};
