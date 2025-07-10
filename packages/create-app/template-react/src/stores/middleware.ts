import { create, type StateCreator } from 'zustand';
import { createJSONStorage, persist, type PersistOptions } from 'zustand/middleware';
import { STORAGE_PREFIX } from './constants';

export function createPersistedStore<T, S = Partial<T>>(
  id: string,
  initializer: StateCreator<T>,
  persistOptions?: Partial<PersistOptions<T, S>>,
) {
  return create(
    persist<T, [], [], S>(initializer, {
      name: `${STORAGE_PREFIX}-${id}`,
      storage: createJSONStorage(() => localStorage),
      ...persistOptions,
    }),
  );
}
