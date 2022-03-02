import Button from './Button';
import heroImg from '../imgs/home/desktop/image-hero-phone.png';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <svg viewBox="0 0 640 640" className="hero__bg" />
      <div className="hero__content">
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button to="/about" label="Learn more" />
      </div>
      <div className="hero__img-wrapper">
        <img src={heroImg} alt="a phone" className="hero__img" />
      </div>
    </div>
  );
};

export default Hero;
