import { useEffect, useRef } from 'react';
import { debounce } from '../../shared/utils/common';

export function useResize(callback: () => void) {
  const previousWidth = useRef(0);

  useEffect(() => {
    const debounceCallback = debounce(() => {
      const { innerWidth } = globalThis;

      if (innerWidth === previousWidth.current) return;

      previousWidth.current = innerWidth;
      callback();
    });

    previousWidth.current = window.innerWidth;
    window.addEventListener('resize', debounceCallback);

    return () => window.removeEventListener('resize', debounceCallback);
  }, []);

  return null;
}
