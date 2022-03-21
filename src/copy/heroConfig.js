const MAIN = 'main';
const DESIGN = 'design';
const ABOUT = 'about';
const CONTACT = 'contact';

export const heroConfig = {
  '/': {
    heading: 'Award-winning custom designs and digital branding solutions',
    p: 'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.',
    mods: { hero: MAIN, bg: MAIN, copy: MAIN },
  },
  '/web-design': {
    heading: 'Web Design',
    p: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    mods: { hero: DESIGN, bg: 'web', copy: DESIGN },
  },
  '/app-design': {
    heading: 'App Design',
    p: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
    mods: { hero: DESIGN, bg: 'app', copy: DESIGN },
  },
  '/graphic-design': {
    heading: 'Graphic Design',
    p: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
    mods: { hero: DESIGN, bg: 'graphic', copy: DESIGN },
  },
  '/about': {
    heading: 'About Us',
    p: "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.",
    mods: { hero: ABOUT, bg: ABOUT, copy: ABOUT },
  },
  '/contact': {
    heading: 'Contact Us',
    p: 'Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.',
    mods: { hero: CONTACT, bg: CONTACT, copy: CONTACT },
  },
};
