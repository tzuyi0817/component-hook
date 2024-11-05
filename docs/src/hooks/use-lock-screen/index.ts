import { onUnmounted } from 'vue';

export function useLockScreen() {
  onUnmounted(() => {
    cleanup();
  });

  return {
    lock,
    cleanup,
  };
}

function lock() {
  document.body.classList.add('overflow-y-hidden');
}

function cleanup() {
  document.body.classList.remove('overflow-y-hidden');
}
