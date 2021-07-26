// Navbar active links START
let links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', function(){
    links.forEach(lnk => lnk.classList.remove('active'));
    this.classList.add('active');
  });
});
// Navbar active links END

// Sticky header START
window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
// Sticky header END


// Navbar active links while scrolling START
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);
// Navbar active links while scrolling END
