import { useState, useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';
import NavLinks from '../components/NavLinks';
import Logo from '../components/Logo';
import Modal from '../components/Modal';
import { navLinks } from '../copy/navLinks';
import { resMod } from '../utils/calcLayoutMod';
import { ReactComponent as IconMenu } from '../imgs/shared/mobile/icon-hamburger.svg';
import { ReactComponent as IconClose } from '../imgs/shared/mobile/icon-close.svg';
import './Header.scss';

const NavBar = ({ open, onClick, logoColor }) => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Logo color={logoColor} />
        <button className="navbar__button" onClick={onClick}>
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      <NavLinks className="navbar__right" links={navLinks} />
    </nav>
  );
};

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const { location } = props;

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const onBtnClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const mod = resMod('header', open && 'open');

  return (
    <header className={mod} id="header">
      <NavBar open={open} onClick={onBtnClick} logoColor={props.logoColor} />
      {open && <Modal mod="nav" onBgClick={onBtnClick} />}
    </header>
  );
};

/* Prevents rerender if user is already at specified page
  Ex 1. Clicking "contact" footer link while at /contact
  Ex 2. Clicking "about" nav link while at /about */
const MemoizedHeader = memo(Header);

const WrappedHeader = (props) => {
  const location = useLocation().pathname;
  return <MemoizedHeader {...props} location={location} />;
};

export default WrappedHeader;
