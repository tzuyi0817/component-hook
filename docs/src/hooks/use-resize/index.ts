import { watch, onScopeDispose, type Ref } from 'vue';

export function useResize(isWatch: Ref<boolean>, callback: () => void) {
  watch(isWatch, value => {
    if (value) {
      window.addEventListener('resize', callback);
    } else {
      window.removeEventListener('resize', callback);
    }
  });

  onScopeDispose(() => {
    window.removeEventListener('resize', callback);
  });
}
