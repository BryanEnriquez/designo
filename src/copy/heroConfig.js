const MAIN = 'main';
const DESIGN = 'design';
const ABOUT = 'about';
const CONTACT = 'contact';

export const heroConfig = {
  '/': {
    heading: 'Award-winning custom designs and digital branding solutions',
    p: 'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.',
    mod: { hero: MAIN, bg: MAIN, copy: MAIN },
  },
  '/web-design': {
    heading: 'Web design',
    p: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    mod: { hero: DESIGN, bg: 'web', copy: DESIGN },
  },
  '/app-design': {
    heading: 'App design',
    p: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
    mod: { hero: DESIGN, bg: 'app', copy: DESIGN },
  },
  '/graphic-design': {
    heading: 'Graphic design',
    p: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
    mod: { hero: DESIGN, bg: 'graphic', copy: DESIGN },
  },
  '/about': {
    heading: 'About us',
    p: "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.",
    mod: { hero: ABOUT, bg: ABOUT, copy: ABOUT },
  },
  '/contact': {
    heading: 'Contact us',
    p: 'Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.',
    mod: { hero: CONTACT, bg: CONTACT, copy: CONTACT },
  },
};
