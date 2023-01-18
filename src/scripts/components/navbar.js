class NavBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="nav container">
        <a href="/" class="nav__logo">
            <picture class="nav__logo-white">
                <source type="image/webp" srcset="images/logo-white.webp">
                <source type="image/png" srcset="images/logo-white.png">
                <img class="lazyload" src="images/logo-white.png" width="105" height="54" alt="DN Restaurant Logo">
            </picture>
            <picture class="nav__logo-black">
                <source type="image/webp" srcset="images/logo-black.webp">
                <source type="image/png" srcset="images/logo-black.png">
                <img class="lazyload" src="images/logo-black.png" width="105" height="54" alt="DN Restaurant Logo">
            </picture>
        </a>
        <button class="nav__toggle" id="nav-toggle" aria-controls="nav-list" aria-label="buka navbar" aria-haspopup="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" alt="menu-toggle"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" /></svg>
        </button>
        <div class="nav__menu" id="nav-menu">
            <button id="nav-close" class="nav__close" aria-label="tutup navbar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
            </button>
            <ul class="nav__list" id="nav-list">
            <li class="nav__item">
                <a href="/" class="nav__link" data-menu="Hero">Home</a>
            </li>
            <li class="nav__item">
                <a href="#/favorite" class="nav__link" data-menu="favorite">Favorite</a>
            </li>
            <li class="nav__item">
                <a href="https://www.linkedin.com/in/dana-mulyana-a30699163/" rel="noopener noreferrer" target="_blank" class="nav__link" data-menu="about-us">About Us</a>
            </li>
            </ul>
        </div>
    </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
