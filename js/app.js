window.onbeforeunload = function () {
    window.scrollTo(0,0);
}

// SLIDE ANIMATIONS
window.addEventListener('scroll', () => {
    const project = document.querySelectorAll('.project');
 
    for(let i = 0; i < project.length; i++) {
        let windowWidth = window.innerHeight;
        let revealProject = project[i].getBoundingClientRect().top;
        const revealPoint = 100;
 
        if(revealProject < windowWidth - revealPoint) {
            project[i].classList.add('active');
        }
    }
 });

//  NAV TOGGLER

const navToggler = document.querySelector('.nav-toggler');
const navList = document.querySelector('.nav-list');
const navBar = document.querySelector('.nav-bar')
let navOpen = false;
navToggler.addEventListener('click', () => {
    if (!navOpen) {
        navToggler.classList.add('open');
        navOpen = true;
        navList.classList.add('open');
        document.body.classList.add('scroll-lock');
        navBar.classList.add('open');

    }
    else {
        navBar.classList.remove('open');
        navToggler.classList.remove('open');
        navOpen = false;
        navList.classList.remove('open');
        document.body.classList.remove('scroll-lock');
    }
});

// HIDE MENU
const menuLink = document.querySelectorAll('.nav-list');

menuLink.forEach(function(mL){
    mL.addEventListener('click',() => {
        navToggler.classList.remove('open');
        navList.classList.remove('open');
        navBar.classList.remove('open');
        document.body.classList.remove('scroll-lock');
        navOpen = false;
    });
});
 