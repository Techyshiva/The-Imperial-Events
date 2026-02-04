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

// REVEAL ANIMATION ON SCROLL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.065 }
);

reveals.forEach((el) => observer.observe(el));

// ===== ACTIVE NAV LINK SYSTEM =====
function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop();

  const allLinks = document.querySelectorAll(
    ".nav-link ul li a, .nav-link-mobile ul li a"
  );

  allLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

// Run after page loads
window.addEventListener("DOMContentLoaded", setActiveNav);
