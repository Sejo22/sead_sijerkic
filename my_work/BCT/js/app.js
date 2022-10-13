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

gsap.to(".main-section-heading", {
  xPercent: 5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".main-section-heading",
    start: "center top",
    end: "bottom top",
    scrub: 2,
  },
});

gsap.to(".bg-image", {
  xPercent: 10,
  scrollTrigger: {
    trigger: ".main-section",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    pin: true,
  },
});

$(window).on("load", function () {
  setTimeout(function () {
    $(".preloader").fadeOut("slow", function () {
      $(".test").css("display", "block");
    });
  }, 1500);
});

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
