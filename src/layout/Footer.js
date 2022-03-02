import Logo from '../components/Logo';
import NavLinks from '../components/NavLinks';
import LocationCard from '../components/LocationCard';
import Socials from '../components/Socials';
import { navLinks } from '../copy/navLinks';
import { locations } from '../copy/locations';
import './Footer.scss';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <div className="footer__logo-box">
          <Logo color={props.logoColor} />
        </div>
        <NavLinks links={navLinks} className="footer__nav-links" />
      </div>
      <div className="footer__info">
        <LocationCard
          location={locations[0]}
          full={false}
          className="footer__location"
        />
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
