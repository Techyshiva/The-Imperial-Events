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

//
window.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".spline");

  containers.forEach((container) => {
    const viewer = container.querySelector("spline-viewer");

    const observer = new MutationObserver(() => {
      const canvas = viewer.shadowRoot?.querySelector("canvas");

      if (canvas) {
        container.classList.add("show");
        observer.disconnect();
      }
    });

    observer.observe(viewer, { childList: true, subtree: true });

    // Safety fallback for each spline
    setTimeout(() => {
      container.classList.add("show");
    }, 1000);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".spline").forEach((container) => {
    const viewer = container.querySelector("spline-viewer");

    /* ---------- 2. Pause when not visible (HUGE GPU SAVE) ---------- */
    const visibility = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          viewer.play();
        } else {
          viewer.pause();
        }
      });
    });

    visibility.observe(viewer);

    /* ---------- 3. FPS LIMIT (if supported) ---------- */
    viewer.setAttribute("render-fps", "30");

    /* ---------- 4. Low device fallback ---------- */
    const isLowDevice =
      navigator.hardwareConcurrency <= 4 || !window.WebGLRenderingContext;

    if (isLowDevice) {
      const img = document.createElement("img");
      img.src = "spline-fallback.jpg"; // put a screenshot here
      img.style.width = "100%";
      viewer.replaceWith(img);
    }
  });
});
