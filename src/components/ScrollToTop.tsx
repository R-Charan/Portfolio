import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const scrollPositions = new Map<string, number>();
const HOME_SCROLL_STORAGE_KEY = 'portfolio-home-scroll-y';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (location.pathname.startsWith('/projects/')) {
      window.scrollTo(0, 0);
    } else {
      const storedHomeScroll = sessionStorage.getItem(HOME_SCROLL_STORAGE_KEY);
      const targetScroll = storedHomeScroll !== null
        ? Number(storedHomeScroll)
        : scrollPositions.get(location.pathname);

      if (typeof targetScroll === 'number' && !Number.isNaN(targetScroll)) {
        requestAnimationFrame(() => {
          window.scrollTo(0, targetScroll);
          window.setTimeout(() => window.scrollTo(0, targetScroll), 100);
        });
      }
    }

    return () => {
      scrollPositions.set(location.pathname, window.scrollY);
    };
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
