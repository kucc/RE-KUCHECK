import { useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';

export const useWindowSize = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const TOP_NAV_BAR_HEIGHT = isMobile ? 54 : 84;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-inner-declarations
      const handleResize = () => {
        if (
          windowSize.width === 0 ||
          windowSize.width !== window.innerWidth ||
          windowSize.height !== window.innerHeight
        ) {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight - TOP_NAV_BAR_HEIGHT,
          });
        }
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
};
