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


window.onbeforeunload = function () {
    window.scrollTo(0,0);
}


const navBar = document.getElementById('header');
window.addEventListener('scroll', () => {
    let lastPos = window.scrollY;
    if(lastPos > 1) {
        console.log('small');
        navBar.classList.add('box-shadow');
    }
    else {
        navBar.classList.remove('box-shadow');
    }
});