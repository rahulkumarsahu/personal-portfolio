"use strict";

document.documentElement.classList.add("js");

const header = document.querySelector(".site-header");
const progress = document.querySelector(".scroll-progress");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileViewport = window.matchMedia("(max-width: 1080px)");
let scrollScheduled = false;

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
  const scrollRatio = scrollRange > 0 ? Math.min(scrollTop / scrollRange, 1) : 0;

  header?.classList.toggle("is-scrolled", scrollTop > 36);
  if (progress) progress.style.transform = `scaleX(${scrollRatio})`;
}

updateScrollUI();
window.addEventListener("scroll", () => {
  if (scrollScheduled) return;
  scrollScheduled = true;
  requestAnimationFrame(() => { updateScrollUI(); scrollScheduled = false; });
}, { passive: true });
window.addEventListener("resize", updateScrollUI, { passive: true });

function closeMenu(restoreFocus = false) {
  const wasOpen = menuToggle?.getAttribute("aria-expanded") === "true";
  menuToggle?.setAttribute("aria-expanded", "false");
  mobileNav?.classList.remove("is-open");
  if (mobileNav) mobileNav.hidden = true;
  menuToggle?.setAttribute("aria-label", "Open navigation");
  if (restoreFocus && wasOpen) menuToggle?.focus();
  document.body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  if (mobileNav) mobileNav.hidden = isOpen;
  mobileNav?.classList.toggle("is-open", !isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  if (!isOpen) mobileNav?.querySelector("a")?.focus();
  document.body.classList.toggle("menu-open", !isOpen);
});

mobileNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  closeMenu();
  const target = link.getAttribute("href");
  if (target?.startsWith("#")) {
    const section = document.querySelector(target);
    section?.setAttribute("tabindex", "-1");
    section?.focus({ preventScroll: true });
  }
}));
mobileViewport.addEventListener("change", () => { if (!mobileViewport.matches) closeMenu(); });
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu(true);
  if (event.key !== "Tab" || menuToggle?.getAttribute("aria-expanded") !== "true") return;
  const controls = [menuToggle, ...mobileNav.querySelectorAll("a")];
  const current = controls.indexOf(document.activeElement);
  if (event.shiftKey && current === 0) { event.preventDefault(); controls.at(-1).focus(); }
  else if (!event.shiftKey && current === controls.length - 1) { event.preventDefault(); menuToggle.focus(); }
});

const navLinks = [...document.querySelectorAll('.desktop-nav a[href^="#"]')];
const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!current) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${current.target.id}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-30% 0px -55%", threshold: [0, 0.25, 0.5] },
  );

  observedSections.forEach((section) => navObserver.observe(section));
}

document.querySelectorAll("[data-current-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
