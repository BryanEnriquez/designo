import React from 'react';
import Section from '../layout/Section';
import Frame from '../components/Frame';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { aboutCopy } from '../copy/aboutCopy';

const About = () => {
  return (
    <React.Fragment>
      <Section r>
        <Frame img="about">
          <Hero />
        </Frame>
      </Section>
      <Section r>
        <Frame img="c1" side="l">
          <Content content={aboutCopy.c1} pattern="c1" />
        </Frame>
      </Section>
      <Section r>
        <Frame img="c2">
          <Content content={aboutCopy.c2} pattern="c2" pad="e" />
        </Frame>
      </Section>
    </React.Fragment>
  );
};

export default About;
