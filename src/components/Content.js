import Copy from './Copy';
import Pattern from './Pattern';
import { resMod } from '../utils/calcLayoutMod';
import './Content.scss';

const Content = (props) => {
  return (
    <div className={resMod('content', props.pad)}>
      <Pattern mod={props.pattern} />
      <div className="content__copy">
        <Copy {...props.content} />
      </div>
    </div>
  );
};

export default Content;
