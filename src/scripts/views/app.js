import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    buttonToggle, buttonClose, drawer, content, navLinks, header, headerLogo, logo,
  }) {
    this._buttonToggle = buttonToggle;
    this._buttonClose = buttonClose;
    this._drawer = drawer;
    this._content = content;
    this._navLinks = navLinks;
    this._header = header;
    this._headerLogo = headerLogo;
    this._logo = logo;

    this._initialAPPSheell();
  }

  _initialAPPSheell() {
    DrawerInitiator.init({
      buttonToggle: this._buttonToggle,
      buttonClose: this._buttonClose,
      drawer: this._drawer,
      navLinks: this._navLinks,
    });

    window.addEventListener('scroll', () => {
      this._scrollPage();
    });
  }

  _scrollPage() {
    if (window.scrollY >= 100) {
      this._header.classList.add('scroll-header');
      this._headerLogo.src = this._logo[0];
    } else {
      this._header.classList.remove('scroll-header');
      this._headerLogo.src = this._logo[1];
    }
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#main').focus();
    });
  }
}

export default App;
