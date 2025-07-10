import { createPersistedStore } from '../middleware';

interface ConfigState {
  isDev: boolean;
  version: string;
}

const versionString = import.meta.env.DEV
  ? `${import.meta.env.VITE_APP_VERSION}-dev`
  : import.meta.env.VITE_APP_VERSION;

const defaultState = {
  isDev: import.meta.env.DEV,
  version: versionString,
};

export const useConfigStore = createPersistedStore<ConfigState>(
  'config',
  () => ({
    ...defaultState,
  }),
  {
    partialize: () => ({}),
  },
);
