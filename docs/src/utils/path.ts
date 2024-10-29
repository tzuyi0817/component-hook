export function generateImageSrc(path: string) {
  return new URL(`/src/assets/images/${path}`, import.meta.url).href;
}
