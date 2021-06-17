document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-about')) {
        aboutPage();
    }
});
function aboutPage() {
    home.classList.add('hidden');
    portfolio.classList.add('hidden');
    about.classList.remove('hidden');
}

/* portfolio page */

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-portfolio')) {
        portfolioPage();
    }
});

function portfolioPage() {
    home.classList.add('hidden');
    about.classList.add('hidden');
    portfolio.classList.remove('hidden');
}

/* home page */

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-times-circle')){
        home.classList.remove('hidden');
        about.classList.add('hidden');
        portfolio.classList.add('hidden');
    }
})

