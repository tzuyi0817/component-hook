import { createPinia as create } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import { STORAGE_PREFIX } from './constants';
export { useConfigStore } from './modules/config';

export function createPinia() {
  const pinia = create();
  const persistedState = createPersistedState({
    key: storeKey => `${STORAGE_PREFIX}-${storeKey}`,
  });

  pinia.use(persistedState);

  return pinia;
}
