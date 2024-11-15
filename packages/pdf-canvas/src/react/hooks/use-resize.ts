import { useEffect } from 'react';
import { debounce } from '../../shared/utils/common';

export function useResize(callback: () => void) {
  let previousWidth = 0;

  const debounceCallback = debounce(() => {
    if (previousWidth === window.innerWidth) return;
    previousWidth = window.innerWidth;
    callback();
  });

  useEffect(() => {
    window.addEventListener('resize', debounceCallback);

    return () => window.removeEventListener('resize', debounceCallback);
  }, []);
}
