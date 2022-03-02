import './Logo.scss';

const Logo = (props) => {
  return <div className={`logo logo--${props.color}`}></div>;
};

export default Logo;
