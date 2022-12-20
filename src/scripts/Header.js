const Header = () => {
  // scroll section
  const sections = document.querySelectorAll('section[id]');

  const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav__menu a[data-menu=${sectionId}]`).classList.add('active-link');
      } else {
        document.querySelector(`.nav__menu a[data-menu=${sectionId}]`).classList.remove('active-link');
      }
    });
  };

  window.addEventListener('scroll', scrollActive);
};

export default Header;
