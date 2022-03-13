import { Outlet, useLocation } from 'react-router-dom';
import CTA from '../components/CTA';
import { calcLayoutMod, resMod } from '../utils/calcLayoutMod';
import './Main.scss';

const Main = () => {
  const location = useLocation();
  const mod = calcLayoutMod(location.pathname);

  return (
    <main className="main">
      <div className={resMod('main__content', mod)}>
        <Outlet />
      </div>
      <div className={resMod('cta-wrapper', mod)}>
        {location.pathname !== '/contact' && <CTA />}
      </div>
    </main>
  );
};

export default Main;
