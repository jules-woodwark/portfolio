import { useState, useEffect } from 'react';
import { Size } from '../models/types';

const isBrowser = typeof window !== 'undefined';

const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: '',
    height: '',
  });

  useEffect(() => {
    if (isBrowser) {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, [isBrowser]);

  useEffect(() => {
    if (isBrowser) {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [windowSize]);

  return windowSize;
};

export default useWindowSize;
