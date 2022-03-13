import { useLocation } from 'react-router-dom';
import Pattern from './Pattern';
import Copy from './Copy';
import { addMod } from '../utils/calcLayoutMod';
import { heroConfig } from '../copy/heroConfig';
import heroImg from '../imgs/home/desktop/image-hero-phone.png';
import './Hero.scss';

const renderHeroImg = () => (
  <div className="hero__img-wrapper">
    <img src={heroImg} alt="a phone" className="hero__img" />
  </div>
);

const Hero = (props) => {
  const path = useLocation().pathname;
  const { heading, p, mod } = heroConfig[path];

  return (
    <div className={addMod('hero', mod.hero)}>
      <Pattern hero mod={mod.bg} />
      <div className={addMod('hero__copy', mod.copy)}>
        <Copy hero main={heading} p={p} />
      </div>
      {props.children}
      {path === '/' && renderHeroImg()}
    </div>
  );
};

export default Hero;
