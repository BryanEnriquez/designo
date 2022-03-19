import React from 'react';
import Section from '../layout/Section';
import Hero from '../components/Hero';
import Form from '../components/Form';
import LocationLinks from '../components/LocationLinks';

const Contact = () => {
  return (
    <React.Fragment>
      <Section r>
        <Hero>
          <Form />
        </Hero>
      </Section>
      <Section>
        <LocationLinks />
      </Section>
    </React.Fragment>
  );
};

export default Contact;
