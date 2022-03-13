import { useLocation } from 'react-router-dom';
import Copy from './Copy';
import { design } from '../copy/designConfig';
import './Cards.scss';

const Cards = () => {
  const path = useLocation().pathname;
  const items = design[path];

  const renderCard = (el) => (
    <div className="cards__card" key={el.label}>
      <img src={el.img} alt={el.p} />
      <div className="cards__copy">
        <Copy main={el.label} p={el.p} />
      </div>
    </div>
  );

  return <div className="cards">{items.map(renderCard)}</div>;
};

export default Cards;
