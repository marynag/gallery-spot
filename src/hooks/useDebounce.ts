import { useEffect, useState } from 'react';
import { DELAY } from '@/constants/debouncer';

export function useDebounce<T>(value: T): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, DELAY);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
