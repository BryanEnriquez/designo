import Button from './Button';
import './CTA.scss';

const CTA = () => {
  return (
    <div className="cta">
      <svg viewBox="0 0 876 584" className="cta__bg" />
      <div className="cta__content">
        <div className="copy">
          <h3>
            Let&rsquo;s talk about
            <br />
            your project
          </h3>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Button to="/contact" label="Get in touch" />
      </div>
    </div>
  );
};

export default CTA;
