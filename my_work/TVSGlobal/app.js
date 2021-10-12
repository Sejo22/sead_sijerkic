$(window).scroll(function(){
    if($(this).scrollTop() >=1) {
        $('.navbar').addClass('sticky-nav')
    }
    else{
        $('.navbar').removeClass('sticky-nav')
    }

});


const navToggler = document.querySelector('.navbar-toggler');
const navUlOpen = document.querySelector('ul');
let navOpen = false;
navToggler.addEventListener('click', () => {
    if (!navOpen) {
        navToggler.classList.add('open');
        navOpen = true;
        navUlOpen.classList.add('open');
    }
    else {
        navToggler.classList.remove('open');
        navOpen = false;
        navUlOpen.classList.remove('open');
        
    }
});