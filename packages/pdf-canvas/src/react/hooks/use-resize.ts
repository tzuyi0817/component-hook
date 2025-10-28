import { useEffect, useRef } from 'react';
import { debounce } from '../../shared/utils/common';

export function useResize(callback: () => void) {
  const previousWidth = useRef(0);

  const debounceCallback = debounce(() => {
    if (previousWidth.current === window.innerWidth) return;

    previousWidth.current = window.innerWidth;
    callback();
  });

  useEffect(() => {
    window.addEventListener('resize', debounceCallback);

    return () => window.removeEventListener('resize', debounceCallback);
  }, []);
}
