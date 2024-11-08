import { ref, watch } from 'vue';
import { useMediaQuery } from '../use-media-query';

export function usePrefersTheme(scheme: 'dark' | 'light', storageKey = 'component-hook-color-scheme') {
  const localScheme = localStorage.getItem(storageKey);
  const isMatchScheme = useMediaQuery(`(prefers-color-scheme: ${scheme})`);
  const isPrefersTheme = ref(localScheme ? localScheme === scheme : isMatchScheme.value);

  function storageScheme(isMatch: boolean) {
    const setScheme = isMatch ? scheme : getOppositeScheme(scheme);

    localStorage.setItem(storageKey, setScheme);
  }

  watch(
    isPrefersTheme,
    (isMatch: boolean) => {
      storageScheme(isMatch);
    },
    { immediate: true },
  );

  watch(isMatchScheme, (isMatch: boolean) => {
    isPrefersTheme.value = isMatch;
  });

  return isPrefersTheme;
}

function getOppositeScheme(scheme: 'dark' | 'light') {
  return scheme === 'dark' ? 'light' : 'dark';
}
