import './Section.scss';
import { resMods } from '../utils/calcLayoutMod';

const Section = ({ limit, shift, r, children, id }) => {
  const cn = resMods('s', { l: limit, shift, r });
  return (
    <section className={cn} {...(id && { id })}>
      {children}
    </section>
  );
};

export default Section;
