window.onscroll = function () {
  stickyNav();
};

let header = document.getElementById("header");
let sticky = header.offsetTop;

function stickyNav() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
    header.classList.add("shadow-lg");
  } else {
    header.classList.remove("sticky");
    header.classList.remove("shadow-lg");
  }
}

// Select the parent element
const naseUsluge = document.getElementById("nase-usluge");

const naseUslugeAnimation = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const rightSide = entry.target.querySelector(".section-right-side");
    const leftSide = entry.target.querySelector(".section-left-side");
    if (entry.isIntersecting) {
      rightSide.classList.add("fadeInLeftDelay2");
      leftSide.classList.add("opacityDelay1");
    }
  });
});

naseUslugeAnimation.observe(naseUsluge);

const oNama = document.getElementById("o-nama");

const oNamaAnimation = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const aboutUs = entry.target.querySelector(".about-us");
    if (entry.isIntersecting) {
      aboutUs.classList.add("fadeInRight");
    }
  });
});

oNamaAnimation.observe(oNama);
