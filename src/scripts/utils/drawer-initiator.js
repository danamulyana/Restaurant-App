const DrawerInitiator = {
  init({
    buttonToggle, buttonClose, drawer, navLinks,
  }) {
    buttonToggle.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    buttonClose.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    navLinks.forEach((n) => n.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    }));
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.add('show-menu');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('show-menu');
  },
};

export default DrawerInitiator;
