import { Link } from 'react-router-dom';
import './Button.scss';

const Button = (props) => {
  const cn = `btn btn--${props.color}`;
  return props.to ? (
    <Link className={cn} to={props.to}>
      {props.label}
    </Link>
  ) : (
    <button className={cn} {...{ onClick: props.onClick }}>
      {props.label}
    </button>
  );
};

Button.defaultProps = { color: 'white' };

export default Button;
