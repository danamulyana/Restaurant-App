class Footer extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="footer section">
        <div class="footer__container container">
        <p class="footer__copy" tabindex="0">©️2022 DNRestaurantsApp. All Rigths reserved.</p>
        <div class="footer__terms">
            <a href="#" class="footer__terms-link">Terms & Agreements</a>
            <a href="#" class="footer__terms-link">Privacy Policy</a>
        </div>
        </div>
    </footer>
      `;
  }
}

customElements.define('dn-footer', Footer);