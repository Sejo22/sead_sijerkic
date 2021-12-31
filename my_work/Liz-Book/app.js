const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        460: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
    

  });
  