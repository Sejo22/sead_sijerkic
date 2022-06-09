const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        loop: true,
        slidesPerView: 1,
        spaceBetween:30,
        speed: 15000,
        grabCursor:true,

      },
      532: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 10000,
        grabCursor:true,
      },
      1200: {
        loop: true,
        grabCursor:true,
        slidesPerView: 3,
        spaceBetween: 32,
        speed: 6000,
      }
    },
  });

  
// NAV TOGGLE
const navToggler = document.querySelector('.nav-toggler');
const navUlOpen = document.querySelector('ul');
let navOpen = false;
navToggler.addEventListener('click', () => {
    if (!navOpen) {
        navToggler.classList.add('open');
        navOpen = true;
        navUlOpen.classList.add('open');
        document.body.classList.add('scroll-lock');
    }
    else {
        navToggler.classList.remove('open');
        navOpen = false;
        navUlOpen.classList.remove('open'); 
        document.body.classList.remove('scroll-lock');
    }
});
  
  