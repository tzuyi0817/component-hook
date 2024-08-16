export function sleep(ms = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function scrollToTop(behavior: ScrollBehavior = 'auto') {
  window.scrollTo({ top: 0, behavior });
}
