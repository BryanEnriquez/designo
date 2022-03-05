import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const Scroller = () => {
  const navType = useNavigationType();
  const internalLink = useLocation();

  useEffect(() => {
    if (internalLink.hash && (navType === 'PUSH' || navType === 'REPLACE')) {
      const el = document.getElementById(internalLink.hash.slice(1));
      if (!el) return;

      const navH = document.getElementById('header').offsetHeight;
      window.scrollTo({
        top: el.offsetTop - navH,
        behavior: 'smooth',
      });
    } else if (navType === 'PUSH') {
      document.documentElement.scrollTop = 0;
    }
  }, [internalLink, navType]);

  return null;
};

export default Scroller;

// Always scrolls to top //
// const Scroller = () => {
//   const location = useLocation().pathname;
//
//   useEffect(() => {
//     document.documentElement.scrollTop = 0;
//   }, [location]);
//
//   return null;
// };
