import { Link } from 'react-router-dom';
import './Button.scss';

const Button = (props) => {
  const cn = `btn btn--${props.color}`;
  return props.to ? (
    <Link className={cn} to={props.to}>
      {props.label}
    </Link>
  ) : (
    <button
      disabled={props.disabled}
      className={cn}
      {...{ onClick: props.onClick }}
    >
      {props.label}
    </button>
  );
};

Button.defaultProps = { color: 'white', disabled: false };

export default Button;
