import React from 'react';

const List = ({ items, children }) => (
  <ul>
    {children}
    {items.map((el, i) => (
      <li key={i}>{el}</li>
    ))}
  </ul>
);

const LocationCard = ({ location, full, className }) => {
  return (
    <div {...(className && { className })}>
      {full ? <span>{location.country}</span> : null}
      <List items={location.address} />
      <List items={location.contact}>
        <li>{`Contact${full ? '' : ' Us (Central Office)'}`}</li>
      </List>
    </div>
  );
};

export default LocationCard;
