// MENU 
const navToggler = document.querySelector('.nav-toggler');
const navList = document.querySelector('ul');
let navOpen = false;
navToggler.addEventListener('click', () => {
    if (!navOpen) {
        navToggler.classList.add('open');
        navOpen = true;
        navList.classList.add('open');
        document.body.classList.add('scroll-lock');

    }
    else {
        navToggler.classList.remove('open');
        navOpen = false;
        navList.classList.remove('open');
        document.body.classList.remove('scroll-lock');
    }
});

// HIDE MENU
const menuLink = document.querySelectorAll('.nav-link');

menuLink.forEach(function(mL){
    mL.addEventListener('click',() => {
        navToggler.classList.remove('open');
        navList.classList.remove('open');
        navOpen = false;
        document.body.classList.remove('scroll-lock');
    });
});

// SCROLL RESET 

window.onbeforeunload = function () {
    window.scrollTo(0,0);
}

// STICKY NAV
window.onscroll = function() {stickyNav()};
const header = document.getElementById('header');
let sticky = header.offsetTop;

function stickyNav() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    }
    else {
        header.classList.remove('sticky');
    }
}

// SMOOTH ON CLICK
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// SLIDE ANIMATIONS

window.addEventListener('scroll', () => {
   const slide = document.querySelectorAll('.slide');

   for(let i = 0; i < slide.length; i++) {
       let windowWidth = window.innerHeight;
       let revealSlide = slide[i].getBoundingClientRect().top;
       const revealPoint = 100;

       if(revealSlide < windowWidth - revealPoint) {
           slide[i].classList.add('active');
       }
   }
});
