import { useEffect } from 'react';
import { useNavigationType } from 'react-router-dom';

const Scroller = () => {
  const navType = useNavigationType();

  useEffect(() => {
    if (navType === 'PUSH') document.documentElement.scrollTop = 0;
  }, [navType]);

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
