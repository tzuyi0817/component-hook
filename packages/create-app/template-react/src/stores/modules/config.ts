import { createPersistedStore } from '../middleware';

interface ConfigState {
  appMeta: {
    version: string;
    builtAt: Date;
  };
}

const versionString = `${import.meta.env.VITE_APP_VERSION}-${import.meta.env.VITE_APP_LAST_COMMIT_HASH}`;

const defaultState = {
  appMeta: {
    version: import.meta.env.MODE === 'development' ? `${versionString}-dev` : versionString,
    builtAt: new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH)),
  },
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
