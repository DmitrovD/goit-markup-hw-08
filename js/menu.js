(() => {
    const refs = {
      openMenuBtn: document.querySelector('.header-menu__button'),
      closeMenuBtn: document.querySelector('.mobile-menu__button'),
      menu: document.querySelector('.mobile-menu'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
    }
  })();