import React from 'react';
import Section from '../layout/Section';
import Hero from '../components/Hero';
import Button from '../components/Button';
import Tiles from '../components/Tiles';
import Statements from '../components/Statements';

const Home = () => {
  return (
    <React.Fragment>
      <Section s1 r>
        <Hero>
          <Button to="/about" label="Learn more" />
        </Hero>
      </Section>
      <Section s2>
        <Tiles />
      </Section>
      <Section s2>
        <Statements />
      </Section>
    </React.Fragment>
  );
};

export default Home;
