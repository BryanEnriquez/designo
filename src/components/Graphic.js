import { applyMod } from '../utils/calcLayoutMod';
import './Graphic.scss';

const Graphic = ({ Svg, mod }) => (
  <div className="graphic">
    <Svg className="graphic__svg" viewBox="0 0 202 202" />
    <div className={applyMod('graphic__gradient', mod)} />
  </div>
);

export default Graphic;
