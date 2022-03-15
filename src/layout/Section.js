import './Section.scss';
import { resMods } from '../utils/calcLayoutMod';

const Section = ({ limit, r, children, id }) => {
  const cn = resMods('s', { l: limit, r });
  return (
    <section className={cn} {...(id && { id })}>
      {children}
    </section>
  );
};

export default Section;
