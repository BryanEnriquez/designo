import React from 'react';
import Section from '../components/Section';
import Hero from '../components/Hero';
import Tiles from '../components/Tiles';

const Home = () => {
  return (
    <React.Fragment>
      <Section>
        <Hero />
      </Section>
      <Section limit>
        <Tiles />
      </Section>
      <Section limit>Section 3</Section>
    </React.Fragment>
  );
};

export default Home;
