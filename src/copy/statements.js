import { ReactComponent as svg1 } from '../imgs/home/desktop/illustration-passionate.svg';
import { ReactComponent as svg2 } from '../imgs/home/desktop/illustration-resourceful.svg';
import { ReactComponent as svg3 } from '../imgs/home/desktop/illustration-friendly.svg';

export const statements = [
  {
    title: 'Passionate',
    text: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    Svg: svg1,
    mod: null,
  },
  {
    title: 'Resourceful',
    text: `Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients${String.fromCharCode(
      8217
    )} needs.`,
    Svg: svg2,
    mod: '270d',
  },
  {
    title: 'Friendly',
    text: 'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
    Svg: svg3,
    mod: '90d',
  },
];
