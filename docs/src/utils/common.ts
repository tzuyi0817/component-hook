export function sleep(ms = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function scrollToTop(behavior: ScrollBehavior = 'auto') {
  window.scrollTo({ top: 0, behavior });
}

export async function copyToClipboard(text: string) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement('textarea');
    const previouslyFocusedElement = document.activeElement;

    element.value = text;
    // Prevent keyboard from showing on mobile
    element.setAttribute('readonly', '');
    element.style.contain = 'strict';
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    element.style.fontSize = '12pt'; // Prevent zooming on iOS

    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;

    document.body.append(element);
    element.select();
    // Explicit selection workaround for iOS
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand('copy');
    element.remove();

    if (selection && originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }

    if (!previouslyFocusedElement || !(previouslyFocusedElement instanceof HTMLElement)) return;

    previouslyFocusedElement.focus();
  }
}
