import './Section.scss';

const Section = ({ limit, children }) => {
  const cn = `section${limit ? ' section--l' : ''}`;
  return <section className={cn}>{children}</section>;
};

export default Section;
