import React from 'react';
import Section from '../layout/Section';
import Hero from '../components/Hero';
import Tiles from '../components/Tiles';
import Statements from '../components/Statements';

const Home = () => {
  return (
    <React.Fragment>
      <Section>
        <Hero />
      </Section>
      <Section limit id="learn-more">
        <Tiles />
      </Section>
      <Section limit>
        <Statements />
      </Section>
    </React.Fragment>
  );
};

export default Home;
