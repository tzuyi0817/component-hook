import { defineStore } from 'pinia';

const versionString = import.meta.env.DEV
  ? `${import.meta.env.VITE_APP_VERSION}-dev`
  : import.meta.env.VITE_APP_VERSION;

const defaultState = {
  isDev: import.meta.env.DEV,
  version: versionString,
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
