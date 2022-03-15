import Graphic from './Graphic';
import Button from './Button';
import { ReactComponent as svg1 } from '../imgs/shared/desktop/illustration-canada.svg';
import { ReactComponent as svg2 } from '../imgs/shared/desktop/illustration-australia.svg';
import { ReactComponent as svg3 } from '../imgs/shared/desktop/illustration-united-kingdom.svg';
import './LocationLinks.scss';

const locations = [
  { label: 'canada', mod: '90d', Svg: svg1 },
  { label: 'australia', mod: null, Svg: svg2 },
  { label: 'united kingdom', mod: '270d', Svg: svg3 },
];

const LocationLinks = () => (
  <div className="locations">
    {locations.map((el) => (
      <div key={el.label} className="locations__box">
        <Graphic Svg={el.Svg} mod={el.mod} />
        <span>{el.label}</span>
        <Button label="See location" to={'/locations'} color="primary" />
      </div>
    ))}
  </div>
);

export default LocationLinks;
