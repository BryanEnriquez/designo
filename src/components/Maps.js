import LocationCard from './LocationCard';
import Pattern from './Pattern';
import Map from './Map';
import { locations } from '../copy/locations';
import './Maps.scss';

const Maps = () => (
  <div className="maps">
    {locations.map((el) => (
      <div key={el.country} className="maps__box">
        <div className="maps__map">
          <Map lng={el.coords[0]} lat={el.coords[1]} />
        </div>
        <div className="maps__info-wrapper">
          <Pattern mod="locations" />
          <LocationCard full className="maps__info" location={el} />
        </div>
      </div>
    ))}
  </div>
);

export default Maps;
