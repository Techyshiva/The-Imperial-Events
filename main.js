// HERO SECTION SLIDE SHOW
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

// MAKING MOBILE NAV WORK
const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".nav-link-mobile");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");

  // toggle icon
  if (mobileNav.classList.contains("active")) {
    menuBtn.setAttribute("name", "close-outline");
    document.body.style.overflow = "hidden"; // lock scroll
  } else {
    menuBtn.setAttribute("name", "menu-outline");
    document.body.style.overflow = "auto";
  }
});

// close menu when clicking a link
document.querySelectorAll(".nav-link-mobile a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    menuBtn.setAttribute("name", "menu-outline");
    document.body.style.overflow = "auto";
  });
});
