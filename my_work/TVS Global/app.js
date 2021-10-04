$(window).scroll(function(){
    if($(this).scrollTop() >=1) {
        $('.navbar').addClass('sticky-nav')
    }
    else{
        $('.navbar').removeClass('sticky-nav')
    }

});

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