import { ref, onScopeDispose } from 'vue';

export function useMediaQuery(query: string) {
  const matches = ref(false);
  let mediaQuery: MediaQueryList | null = window.matchMedia(query);

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
