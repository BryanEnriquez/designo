import express from '../imgs/web-design/desktop/image-express.jpg';
import transfer from '../imgs/web-design/desktop/image-transfer.jpg';
import photon from '../imgs/web-design/desktop/image-photon.jpg';
import builder from '../imgs/web-design/desktop/image-builder.jpg';
import blogr from '../imgs/web-design/desktop/image-blogr.jpg';
import camp from '../imgs/web-design/desktop/image-camp.jpg';
import airfilter from '../imgs/app-design/desktop/image-airfilter.jpg';
import eyecam from '../imgs/app-design/desktop/image-eyecam.jpg';
import faceit from '../imgs/app-design/desktop/image-faceit.jpg';
import todo from '../imgs/app-design/desktop/image-todo.jpg';
import loopstudios from '../imgs/app-design/desktop/image-loopstudios.jpg';
import change from '../imgs/graphic-design/desktop/image-change.jpg';
import boxedwater from '../imgs/graphic-design/desktop/image-boxed-water.jpg';
import science from '../imgs/graphic-design/desktop/image-science.jpg';

export const design = {
  '/web-design': [
    {
      label: 'Express',
      p: 'A multi-carrier shipping website for ecommerce businesses',
      img: express,
    },
    {
      label: 'Transfer',
      p: 'Site for low-cost money transfers and sending money within seconds',
      img: transfer,
    },
    {
      label: 'Photon',
      p: 'A state-of-the-art music player with high-resolution audio and DSP effects',
      img: photon,
    },
    {
      label: 'Builder',
      p: 'Connects users with local contractors based on their location',
      img: builder,
    },
    {
      label: 'Blogr',
      p: 'Blogr is a platform for creating an online blog or publication',
      img: blogr,
    },
    {
      label: 'Camp',
      p: 'Get expert training in coding, data, design, and digital marketing',
      img: camp,
    },
  ],
  '/app-design': [
    {
      label: 'Airfilter',
      p: 'Solving the problem of poor indoor air quality by filtering the air',
      img: airfilter,
    },
    {
      label: 'Eyecam',
      p: 'Product that lets you edit your favorite photos and videos at any time',
      img: eyecam,
    },
    {
      label: 'Faceit',
      p: 'Get to meet your favorite internet superstar with the faceit app',
      img: faceit,
    },
    {
      label: 'Todo',
      p: 'A todo app that features cloud sync with light and dark mode',
      img: todo,
    },
    {
      label: 'Loopstudios',
      p: 'A VR experience app made for Loopstudios',
      img: loopstudios,
    },
  ],
  '/graphic-design': [
    {
      label: 'Tim Brown',
      p: 'A book cover designed for Tim Brown’s new release, ‘Change’',
      img: change,
    },
    {
      label: 'Boxed water',
      p: 'A simple packaging concept made for Boxed Water',
      img: boxedwater,
    },
    {
      label: 'Science!',
      p: 'A poster made in collaboration with the Federal Art Project',
      img: science,
    },
  ],
};
