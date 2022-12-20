import 'regenerator-runtime'; /* for async await transpile */
import '../scss/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  buttonToggle: document.querySelector('#nav-toggle'),
  buttonClose: document.querySelector('#nav-close'),
  drawer: document.querySelector('#nav-menu'),
  content: document.querySelector('#main'),
  navLinks: document.querySelectorAll('.nav__link'),
  header: document.querySelector('#header'),
  headerLogo: document.querySelector('#header img'),
  logo: ['images/logo-black.webp', 'images/logo-white.webp'],
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
