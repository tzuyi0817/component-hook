let cachePixelsPerInch: number | null = null;

function getPixelsPerInch() {
  const div = document.createElement('div');

  div.style.width = '1in';
  document.body.appendChild(div);
  const pixelsPerInch = div.offsetWidth;

  document.body.removeChild(div);
  return pixelsPerInch;
}

export function getPixelsPerPoint() {
  const pixelsPerInch = cachePixelsPerInch ?? getPixelsPerInch();

  cachePixelsPerInch = pixelsPerInch;
  return pixelsPerInch / 72;
}

export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(fun: T, time = 500) {
  if (typeof fun !== 'function') throw new TypeError('The first argument is not a function.');
  let timer: NodeJS.Timeout | null = null;

  return function (this: void, ...args: Parameters<T>) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fun.apply(this, args);
    }, time);
  };
}
