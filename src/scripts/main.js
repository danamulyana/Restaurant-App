const Main = () => {
    const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }

    const navLink = document.querySelectorAll('.nav__link');
    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    }

    navLink.forEach(n => n.addEventListener('click',linkAction));

    const scrollHeader = () => {
        const header = document.getElementById('header');
        const imgLogo = document.querySelector('#header img');
        if(window.scrollY >= 100){
            header.classList.add('scroll-header');
            imgLogo.src = "images/logo-black.webp";
        }else{
            header.classList.remove('scroll-header')
            imgLogo.src = "images/logo-white.webp";
        }
    }

    window.addEventListener('scroll',scrollHeader);

    // scroll section
    const sections = document.querySelectorAll('section[id]');
    
    const scrollActive = () => {
        const scrollY = window.pageYOffset
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            let sectionId = current.getAttribute('id');
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[data-menu=' + sectionId + ']').classList.add('active-link');
            }else{
                document.querySelector('.nav__menu a[data-menu=' + sectionId + ']').classList.remove('active-link');
            }
        })
    }

    window.addEventListener('scroll',scrollActive);
}

export default Main;