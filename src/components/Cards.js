import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from './Modal';
import Copy from './Copy';
import { design } from '../copy/designConfig';
import { ReactComponent as IconClose } from '../imgs/shared/mobile/icon-close.svg';
import './Cards.scss';

const View = ({ img, onBtnClick }) => {
  return (
    <div className="view">
      <div className="view__box">
        <button className="view__btn" onClick={onBtnClick}>
          <IconClose className="view__icon" />
        </button>
        <img src={img.img} alt={img.p} />
      </div>
    </div>
  );
};

const Cards = () => {
  const path = useLocation().pathname;
  const items = design[path];
  const [currentImg, setCurrentImg] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') setCurrentImg(null);
    };

    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  const renderCard = (el) => {
    return (
      <div
        className="cards__card"
        key={el.label}
        onClick={() => setCurrentImg(el)}
      >
        <img src={el.img} alt={el.p} />
        <div className="cards__copy">
          <Copy main={el.label} p={el.p} />
        </div>
      </div>
    );
  };

  const onBgClick = (e) => {
    e.preventDefault();
    if (e.target.className === 'view') setCurrentImg(null);
  };

  return (
    <div className="cards">
      {items.map(renderCard)}
      {currentImg && (
        <Modal mod="view" onBgClick={onBgClick}>
          <View img={currentImg} onBtnClick={() => setCurrentImg(null)} />
        </Modal>
      )}
    </div>
  );
};

export default Cards;
