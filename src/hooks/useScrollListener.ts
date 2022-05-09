import { createContext, useState, useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

export const useScrollListener = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  //  set up event listeners
  useEffect(() => {
    if (isBrowser) {
      const handleScroll = () => {
        setData((last) => {
          return {
            x: window.scrollX,
            y: window.scrollY,
            lastX: last.x,
            lastY: last.y,
          };
        });
      };

      handleScroll();
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return data;
};

export const ScrollContext = createContext(null);
