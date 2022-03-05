import './Section.scss';

const Section = ({ limit, children, id }) => {
  const cn = `section${limit ? ' section--l' : ''}`;
  return (
    <section className={cn} {...(id && { id })}>
      {children}
    </section>
  );
};

export default Section;
