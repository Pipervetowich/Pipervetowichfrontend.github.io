import { useState, useEffect } from 'react';

export function useDebouncedState<T>(
  initialValue: T,
  delay: number
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(initialValue);
  const [debouncedState, setDebouncedState] = useState<T>(initialValue);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedState(state);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [state, delay]);
  
  return [debouncedState, setState];
}