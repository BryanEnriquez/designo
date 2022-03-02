import NavLinks from './NavLinks';
import { socialLinks } from '../copy/socialLinks';
import './Socials.scss';

const Socials = ({ className }) => {
  const cn = 'socials';
  return (
    <NavLinks
      links={socialLinks}
      type="icon"
      className={className ? `${cn} ${className}` : cn}
    />
  );
};

export default Socials;
