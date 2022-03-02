import { ReactComponent as facebook } from '../imgs/shared/desktop/icon-facebook.svg';
import { ReactComponent as instagram } from '../imgs/shared/desktop/icon-instagram.svg';
import { ReactComponent as pinterest } from '../imgs/shared/desktop/icon-pinterest.svg';
import { ReactComponent as twitter } from '../imgs/shared/desktop/icon-twitter.svg';
import { ReactComponent as youtube } from '../imgs/shared/desktop/icon-youtube.svg';

export const socialLinks = [
  { label: 'facebook', href: '#', Component: facebook },
  { label: 'youtube', href: '#', Component: youtube },
  { label: 'twitter', href: '#', Component: twitter, viewBox: '0 0 24 20' },
  { label: 'pinterest', href: '#', Component: pinterest },
  { label: 'instagram', href: '#', Component: instagram },
];
