import { addMod } from '../utils/calcLayoutMod';
import './Frame.scss';

const Frame = ({ children, side, img }) => {
  return (
    <div className={`frame frame--${side}`}>
      <div className={addMod('frame__img', img)} />
      {children}
    </div>
  );
};

Frame.defaultProps = {
  side: 'r',
};

export default Frame;
