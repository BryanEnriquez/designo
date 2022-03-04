const WEB_LABEL = 'Web design';

const WEB = { label: WEB_LABEL, mod: 'web', href: '/web-design' };
const WEB_HOME = { label: WEB_LABEL, mod: 'web-large', href: '/web-design' };
const APP = { label: 'App design', mod: 'app', href: '/app-design' };
const GRAPHIC = {
  label: 'Graphic design',
  mod: 'graphic',
  href: '/graphic-design',
};

const homeLayout = { 1: WEB_HOME, 2: [APP, GRAPHIC] };
const webLayout = { 1: APP, 2: [GRAPHIC] };
const appLayout = { 1: WEB, 2: [GRAPHIC] };
const graphicLayout = { 1: APP, 2: [WEB] };

export const tileLayouts = {
  '/': homeLayout,
  '/web-design': webLayout,
  '/app-design': appLayout,
  '/graphic-design': graphicLayout,
};
