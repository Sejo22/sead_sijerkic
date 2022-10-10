gsap.to(".keyboard-img-rotate", {
  scrollTrigger: {
    trigger: ".keyboard-img-rotate",
    toggleClass: "active",
  },
});

gsap.to(".main-section-content", {
  scrollTrigger: {
    trigger: ".main-section-content",
    toggleClass: "active",
    start: "bottom top", // when the top of the trigger hits the top of the viewport
    end: "+=2500",
  },
});

gsap.from(".bg-image", {
  scrollTrigger: {
    trigger: ".main-heading",
    scrub: true,
    pin: false,
    start: "top top",
    end: "+=500",
  },
  x: -800,
});

// NAV TOGGLE
const navToggler = document.querySelector(".nav-toggler");
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
