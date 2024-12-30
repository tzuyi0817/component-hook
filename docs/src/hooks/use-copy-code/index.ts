import { copyToClipboard } from '@/utils/common';

export function useCopyCode() {
  const timerMap = new WeakMap<HTMLElement, NodeJS.Timeout>();

  window.addEventListener('click', (event: Event) => {
    const element = event.target as HTMLElement;

    if (!element.matches('pre[class*="language-"] > button.copy-code')) return;
    const languageWrap = element.parentElement;

    if (!languageWrap) return;
    const codeWrap = languageWrap.querySelector('code');

    if (!codeWrap) return;
    const shell = /language-(?:shellscript|shell|bash|sh|zsh)/;
    const isShell = shell.test(languageWrap.className);
    let code = codeWrap.textContent || '';

    if (isShell) {
      code = code.replaceAll(/^\$ /gm, '');
    }

    copyToClipboard(code).then(() => {
      const cacheTimer = timerMap.get(element);

      element.classList.toggle('copied', true);
      if (cacheTimer) clearTimeout(cacheTimer);

      const timer = setTimeout(() => {
        element.classList.toggle('copied', false);
        element.blur();
        timerMap.delete(element);
      }, 2000);

      timerMap.set(element, timer);
    });
  });
}
