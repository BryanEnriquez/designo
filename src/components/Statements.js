import Graphic from './Graphic';
import { statements } from '../copy/statements';
import './Statements.scss';

const renderStatement = (el) => (
  <div key={el.title} className="statements__block">
    <Graphic Svg={el.Svg} mod={el.mod} />
    <div className="statements__copy">
      <h3>{el.title}</h3>
      <p>{el.text}</p>
    </div>
  </div>
);

const Statements = () => (
  <div className="statements">{statements.map(renderStatement)}</div>
);

export default Statements;
