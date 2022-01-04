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


// ANIMATION 
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}




const developer = document.querySelector('.developer');
const and = document.querySelector('.and');
const designer = document.querySelector('.designer');

window.addEventListener('scroll', ()=> {

    if(scrollY > 200){
        document.querySelector('.developer').classList.add('left');
        document.querySelector('.and').classList.add('fade');
        document.querySelector('.designer').classList.add('right');
        document.querySelector('.name').classList.add('slide');
    }
    else {
        document.querySelector('.developer').classList.remove('left');
        document.querySelector('.and').classList.remove('fade');
        document.querySelector('.designer').classList.remove('right');
        document.querySelector('.name').classList.remove('slide');

    }

});
    


