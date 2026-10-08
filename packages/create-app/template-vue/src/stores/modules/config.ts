import { acceptHMRUpdate, defineStore } from 'pinia';

const versionString = `${import.meta.env.VITE_APP_VERSION}-${import.meta.env.VITE_APP_LAST_COMMIT_HASH}`;

const defaultState = {
  appMeta: {
    version: import.meta.env.MODE === 'development' ? `${versionString}-dev` : versionString,
    builtAt: new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH)),
  },
};

export const useConfigStore = defineStore('config', {
  state: () => defaultState,
  getters: {},
  actions: {},
  persist: {
    storage: localStorage,
    pick: [],
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useConfigStore, import.meta.hot));
}
