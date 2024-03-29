import 'regenerator-runtime';
import './components/navbar';
import './components/footer';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
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
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
