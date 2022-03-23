import './Section.scss';
import { resMods } from '../utils/calcLayoutMod';

const Section = ({ s1, s2, shift, r, children, id }) => {
  const cn = resMods('s', { s1, s2, shift, r });

  return (
    <section className={cn} {...(id && { id })}>
      {children}
    </section>
  );
};

export default Section;
