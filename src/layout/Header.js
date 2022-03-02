import { useState, useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';
import NavLinks from '../components/NavLinks';
import Logo from '../components/Logo';
import Modal from '../components/Modal';
import { navLinks } from '../copy/navLinks';
import { ReactComponent as IconMenu } from '../imgs/shared/mobile/icon-hamburger.svg';
import { ReactComponent as IconClose } from '../imgs/shared/mobile/icon-close.svg';
import './Header.scss';

const Header = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { location } = props;

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const onBtnClick = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  const modifier = expanded ? 'header--expanded' : '';

  return (
    <header className={`header ${modifier}`}>
      <div className="header__subgrid">
        <Logo color={props.logoColor} />
        <button className="header__button" onClick={onBtnClick}>
          {expanded ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      <NavLinks className="header__navbar" links={navLinks} />
      {expanded ? <Modal onBgClick={onBtnClick} /> : null}
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
