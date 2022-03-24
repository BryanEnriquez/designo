import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CTA from '../components/CTA';
import { calcLayoutMod, resMod, addMod } from '../utils/calcLayoutMod';
import './Main.scss';

const SiteBackground = ({ items }) => (
  <React.Fragment>
    {items.map((el) => (
      <div key={el} className={addMod('site-bg', el)} />
    ))}
  </React.Fragment>
);

const Main = () => {
  const location = useLocation();
  const [mod, svgItems] = calcLayoutMod(location.pathname);

  return (
    <main className="main">
      <div className={resMod('main__content', mod)}>
        <Outlet />
      </div>
      <div className={resMod('cta-wrapper', mod)}>
        {location.pathname !== '/contact' && <CTA />}
      </div>
      {svgItems && <SiteBackground items={svgItems} />}
    </main>
  );
};

export default Main;
