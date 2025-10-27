import { onScopeDispose, ref } from 'vue';

export function useMediaQuery(query: string) {
  let mediaQuery: MediaQueryList | null = globalThis.matchMedia(query);
  const matches = ref(mediaQuery.matches);

  mediaQuery.addEventListener('change', updateMatches);

  function updateMatches(event: MediaQueryListEvent) {
    matches.value = event.matches;
  }

  function cleanup() {
    if (!mediaQuery) return;

    mediaQuery.removeEventListener('change', updateMatches);
    mediaQuery = null;
  }

  onScopeDispose(() => {
    cleanup();
  });

  return matches;
}
