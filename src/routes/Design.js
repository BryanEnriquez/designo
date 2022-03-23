import React from 'react';
import Section from '../layout/Section';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Tiles from '../components/Tiles';

const Design = () => {
  return (
    <React.Fragment>
      <Section s1 r>
        <Hero />
      </Section>
      <Section s2>
        <Cards />
      </Section>
      <Section s2>
        <Tiles />
      </Section>
    </React.Fragment>
  );
};

export default Design;
