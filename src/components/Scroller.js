import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroller = () => {
  const location = useLocation().pathname;

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [location]);

  return null;
};

export default Scroller;
