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
        slidesPerView: 1,
        spaceBetween:30,
        speed: 15000,
        grabCursor:true,

      },
      532: {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 10000,
        grabCursor:true,
      },
      1200: {
        grabCursor:true,
        slidesPerView: 3,
        spaceBetween: 32,
        speed: 6000,
      }
    },
  });
  
  