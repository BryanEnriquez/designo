import { Link } from 'react-router-dom';
import './Logo.scss';
import LogoDark from '../imgs/shared/desktop/logo-dark.png';
import LogoLight from '../imgs/shared/desktop/logo-light.png';

const Logo = (props) => {
  return (
    <Link to="/" className="logo-box">
      <img
        src={props.color === 'dark' ? LogoDark : LogoLight}
        className="logo"
        alt="designo logo"
      />
    </Link>
  );
};

export default Logo;
