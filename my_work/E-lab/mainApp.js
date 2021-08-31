const navToggler = document.querySelector('.navbar-toggler');
let navOpen = false;
navToggler.addEventListener('click', () => {
    if (!navOpen) {
        navToggler.classList.add('open');
        navOpen = true;
    }
    else {
        navToggler.classList.remove('open');
        navOpen = false;
    }
});

const navList = document.querySelector('.nav-list');

navToggler.addEventListener('click', () => {
    navList.classList.toggle('active');
});


let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
    document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.2";

  }
  prevScrollpos = currentScrollPos;
} 