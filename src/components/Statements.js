import Graphic from './Graphic';
import Copy from './Copy';
import { statements } from '../copy/statements';
import './Statements.scss';

const renderStatement = (el) => (
  <div key={el.title} className="statements__block">
    <Graphic Svg={el.Svg} mod={el.mod} />
    <div className="statements__copy">
      <Copy main={el.title} p={el.text} />
    </div>
  </div>
);

const Statements = () => (
  <div className="statements">{statements.map(renderStatement)}</div>
);

export default Statements;
