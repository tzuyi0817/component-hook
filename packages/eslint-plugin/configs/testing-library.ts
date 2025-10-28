import { pluginTestingLibrary } from '../plugins';
import type { Config } from '../types';

const configs = pluginTestingLibrary.configs;
const plugins = {
  'testing-library': pluginTestingLibrary,
};

export const testingLibraryDomConfig: Config = {
  name: 'component-hook/testing-library/dom',
  plugins,
  rules: {
    ...configs['flat/dom'].rules,
  },
};

export const testingLibraryAngularConfig: Config = {
  name: 'component-hook/testing-library/angular',
  plugins,
  rules: {
    ...configs['flat/angular'].rules,
  },
};

export const testingLibraryReactConfig: Config = {
  name: 'component-hook/testing-library/react',
  plugins,
  rules: {
    ...configs['flat/react'].rules,
  },
};

export const testingLibraryVueConfig: Config = {
  name: 'component-hook/testing-library/vue',
  plugins,
  rules: {
    ...configs['flat/vue'].rules,
  },
};

export const testingLibraryMarkoConfig: Config = {
  name: 'component-hook/testing-library/marko',
  plugins,
  rules: {
    ...configs['flat/marko'].rules,
  },
};
