import { useLocation, Link } from 'react-router-dom';
import Copy from './Copy';
import { tileLayouts } from '../copy/designLinks';
import { resMod } from '../utils/calcLayoutMod';
import './Tiles.scss';

const renderTile = (el) => (
  <Link className={'tiles__tile'} key={el.label} to={el.href}>
    <div className={resMod('tiles__bg', el.mod)} aria-hidden />
    <Copy main={el.label} p={'View projects'} />
  </Link>
);

const Tiles = () => {
  const location = useLocation().pathname;

  const tiles = tileLayouts[location];
  const leftTile = renderTile(tiles[1]);
  const rightTiles = tiles[2].map(renderTile);

  return (
    <div className="tiles">
      <div className="tiles__box-l">{leftTile}</div>
      <div className="tiles__box-r">{rightTiles}</div>
    </div>
  );
};

export default Tiles;
