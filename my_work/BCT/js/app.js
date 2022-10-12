gsap.to(".keyboard-img-rotate", {
  transformOrigin: "center",
  rotationX: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".keyboard-img-rotate",
    start: "top bottom",
    end: "+=500",
    scrub: true,
  },
});

gsap.to(".main-section-content", {
  yPercent: 150,
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".main-section-content",
    start: "top top",
    end: "+=80",
    scrub: true,
  },
});

// gsap.from(".bg-image-wrapper", {
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".bg-image-wrapper",
//     start: "center top",
//     end: "bottom top",
//     scrub: true,
//   },
// });

// NAV TOGGLE
const navToggler = document.querySelector(".navbar-toggler");
const navUlOpen = document.querySelector("ul");
let navOpen = false;
navToggler.addEventListener("click", () => {
  if (!navOpen) {
    navToggler.classList.add("open");
    navOpen = true;
    navUlOpen.classList.add("open");
    document.body.classList.add("scroll-lock");
  } else {
    navToggler.classList.remove("open");
    navOpen = false;
    navUlOpen.classList.remove("open");
    document.body.classList.remove("scroll-lock");
  }
});

if ($(window).width() > 1024) {
  $(function () {
    $("body").niceScroll({
      scrollspeed: 200, // scrolling speed
      mousescrollstep: 25,
      hwacceleration: true, // use hardware accelerated scroll when supported
      bouncescroll: true, // (only hw accell) enable scroll bouncing at the end of content as mobile-like
      autohidemode: true,
      cursorwidth: "0px",
      smoothscroll: true, // scroll with ease movement
    });
  });
}
