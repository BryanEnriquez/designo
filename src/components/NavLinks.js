import { Link } from 'react-router-dom';

const RRLinks = (links) =>
  links.map(({ href, label }) => (
    <li key={href}>
      <Link to={href}>{label}</Link>
    </li>
  ));

const IconLinks = (links) =>
  links.map(({ href, label, viewBox, Component }) => {
    const accessText = `Company ${label} page`;
    return (
      <li key={label}>
        <a href={href} className="access">
          <Component
            title={accessText}
            aria-hidden
            viewBox={viewBox || '0 0 24 24'}
            className="icon"
          />
          <span className="access__hidden">{accessText}</span>
        </a>
      </li>
    );
  });

const NavLinks = ({ links, type, className }) => {
  return (
    <ul {...(className && { className })}>
      {type === 'router' ? RRLinks(links) : IconLinks(links)}
    </ul>
  );
};

NavLinks.defaultProps = {
  type: 'router',
};

export default NavLinks;

// const IconLinks = (links) =>
//   links.map(({ href, label, viewBox }) => (
//     <li key={label}>
//       <a href={href} className="access">
//         <svg
//           aria-hidden
//           viewBox={viewBox || '0 0 24 24'}
//           className={`icon icon--${label}`}
//         />
//         <span className="access__hidden">{`Company ${label} page`}</span>
//       </a>
//     </li>
//   ));
