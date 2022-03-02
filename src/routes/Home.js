import React from 'react';
import Section from '../components/Section';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <React.Fragment>
      <Section>
        <Hero />
      </Section>
      <Section limit>Section 2</Section>
      <Section limit>Section 3</Section>
    </React.Fragment>
  );
};

export default Home;
