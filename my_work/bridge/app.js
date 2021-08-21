const swiper = new Swiper('.slider1', {
    direction: 'horizontal',
    loop: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

  const swiper2 = new Swiper('.slider2', {
    direction: 'horizontal',
    slidesPerView:5,
    freeMode: true,

  });