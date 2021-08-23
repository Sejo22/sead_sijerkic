const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  spaceBetween: 50,
});

function openMenu() {
  document.getElementById('menu').classList.toggle('active');
}
  
