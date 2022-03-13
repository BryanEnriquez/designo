import React from 'react';
import Section from '../layout/Section';
import Hero from '../components/Hero';
import Tiles from '../components/Tiles';

const Design = () => {
  return (
    <React.Fragment>
      <Section>
        <Hero />
      </Section>
      <Section limit>
        <Tiles />
      </Section>
    </React.Fragment>
  );
};

export default Design;
