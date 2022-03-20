import { useState, useEffect, useRef } from 'react';
import mapboxgl from '!mapbox-gl'; //eslint-disable-line import/no-webpack-loader-syntax
import './Map.scss';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZWJyeWFuMjciLCJhIjoiY2wweWd5d2x6MXlteTNicnBraGc2NDFsbiJ9.hWBmX4jXxM3Hzwx6rCfIvw';

const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(props.lng);
  const [lat, setLat] = useState(props.lat);
  // const [zoom, setZoom] = useState(11);

  useEffect(() => {
    // Init once
    if (map.current) return;

    // Create map within container and save returned obj
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 11,
      // scrollZoom: false,
    });
  });

  useEffect(() => {
    if (!map.current) return;

    // Register callback to update state
    map.current.on('move', () => {
      if (!mapContainer.current) return; // Fix warning

      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      // setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  return (
    <div className="map">
      <div className="map__sidebar">
        Longitude: <span>{lng}</span> | Latitude: <span>{lat}</span>
      </div>
      <div ref={mapContainer} className="map__container"></div>
    </div>
  );
};

export default Map;
