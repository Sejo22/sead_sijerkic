const navToggler = document.querySelector('.navbar-toggler');
let navOpen = false;
navToggler.addEventListener('click', () => {
    if (!navOpen) {
        navToggler.classList.add('open');
        navOpen = true;
        document.querySelector('body').style.position='fixed';
    }
    else {
        navToggler.classList.remove('open');
        navOpen = false;
        document.querySelector('body').style='';
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
    document.getElementById('navbar').style.top = '0';
    document.getElementById('navbar').style.backgroundColor = 'rgba(0,0,0,0.6)';
  } else {
    document.getElementById('navbar').style.top = '-120px';
    document.getElementById('navbar').style.backgroundColor ='transparent';

  }
  prevScrollpos = currentScrollPos;
}



// animations
window.addEventListener('scroll', reveal);

function reveal(){
  const reveals = document.querySelectorAll('.reveal');

  for(let i = 0; i < reveals.length; i++) {
    
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top; 
    const revealpoint = 100;

    if(revealtop < windowheight - revealpoint ) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', () => {
  const slideIn = document.querySelectorAll('.slide-in');

  for(let i = 0; i < slideIn.length; i++) {
    
    let windowWidth = window.innerHeight;
    let revealSide = slideIn[i].getBoundingClientRect().top;
    const revealpoint = 100;

    if(revealSide < windowWidth - revealpoint) {
      slideIn[i].classList.add('active');
    }
    else {
      slideIn[i].classList.remove('active');
    }
  }
})