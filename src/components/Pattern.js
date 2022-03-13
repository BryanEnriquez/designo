import { addMod } from '../utils/calcLayoutMod';
import './Pattern.scss';

const renderPattern = (mod) => <svg className={addMod('pattern', mod)} />;

const Pattern = ({ hero, mod }) => {
  if (hero) return renderPattern(mod);

  if (mod === 'about') return renderPattern('about-c');

  // locations
  return (
    <div className={addMod('pattern', mod)}>
      <svg className="ptrn-1" />
      <svg className="ptrn-2" />
    </div>
  );
};

export default Pattern;
