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
  } else {
    navToggler.classList.remove("open");
    navOpen = false;
    navUlOpen.classList.remove("open");
  }
});

let deviceWidth = $(window).width();
if (deviceWidth < 768) {
  $("#scroll").remove();
} else {
  // NO SCRIPT
}
