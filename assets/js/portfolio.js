"use strict";

const root = document.documentElement;
root.classList.add("js");

const header = document.querySelector(".site-header");
const progress = document.querySelector(".scroll-progress");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const motionToggle = document.querySelector(".motion-toggle");
const motionLabel = motionToggle?.querySelector(".motion-copy strong");
const mobileViewport = window.matchMedia("(max-width: 1080px)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const revealItems = [...document.querySelectorAll(".reveal-on-scroll")];
let scrollScheduled = false;
let closeTimer;

function storedMotionPreference() {
  try {
    const value = window.localStorage.getItem("rahul-portfolio-motion");
    return value === null ? null : value === "on";
  } catch {
    return null;
  }
}

let motionEnabled = storedMotionPreference() ?? !reducedMotion.matches;

function setMotion(enabled, persist = false) {
  motionEnabled = enabled;
  root.dataset.motion = enabled ? "on" : "off";
  motionToggle?.setAttribute("aria-pressed", String(!enabled));
  motionToggle?.setAttribute("aria-label", enabled ? "Pause animations" : "Play animations");
  if (motionLabel) motionLabel.textContent = enabled ? "on" : "off";
  if (!enabled) revealItems.forEach((item) => item.classList.add("is-visible"));

  if (persist) {
    try { window.localStorage.setItem("rahul-portfolio-motion", enabled ? "on" : "off"); } catch { /* Storage may be disabled. */ }
  }
}

setMotion(motionEnabled);
motionToggle?.addEventListener("click", () => setMotion(!motionEnabled, true));

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollRange > 0 ? Math.min(scrollTop / scrollRange, 1) : 0;

  header?.classList.toggle("is-scrolled", scrollTop > 28);
  if (progress) progress.style.transform = `scaleX(${ratio})`;
}

updateScrollUI();
window.addEventListener("scroll", () => {
  if (scrollScheduled) return;
  scrollScheduled = true;
  requestAnimationFrame(() => {
    updateScrollUI();
    scrollScheduled = false;
  });
}, { passive: true });
window.addEventListener("resize", updateScrollUI, { passive: true });

function finishMenuClose(restoreFocus) {
  if (mobileNav) mobileNav.hidden = true;
  if (restoreFocus) menuToggle?.focus();
}

function closeMenu(restoreFocus = false) {
  const wasOpen = menuToggle?.getAttribute("aria-expanded") === "true";
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Open navigation");
  mobileNav?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  window.clearTimeout(closeTimer);
  closeTimer = window.setTimeout(() => finishMenuClose(restoreFocus && wasOpen), 220);
}

function openMenu() {
  window.clearTimeout(closeTimer);
  if (mobileNav) mobileNav.hidden = false;
  menuToggle?.setAttribute("aria-expanded", "true");
  menuToggle?.setAttribute("aria-label", "Close navigation");
  document.body.classList.add("menu-open");
  requestAnimationFrame(() => {
    mobileNav?.classList.add("is-open");
    mobileNav?.querySelector("a")?.focus();
  });
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) closeMenu();
  else openMenu();
});

mobileNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => closeMenu()));
mobileViewport.addEventListener("change", () => { if (!mobileViewport.matches) closeMenu(); });

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu(true);
  if (event.key !== "Tab" || menuToggle?.getAttribute("aria-expanded") !== "true" || !mobileNav) return;

  const controls = [menuToggle, ...mobileNav.querySelectorAll("a")];
  const current = controls.indexOf(document.activeElement);
  if (event.shiftKey && current === 0) {
    event.preventDefault();
    controls.at(-1)?.focus();
  } else if (!event.shiftKey && current === controls.length - 1) {
    event.preventDefault();
    menuToggle.focus();
  }
});

const navLinks = [...document.querySelectorAll('.desktop-nav a[href^="#"]')];
const observedSections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -10%", threshold: 0.08 });

  revealItems.forEach((item) => {
    if (item.getBoundingClientRect().top < window.innerHeight * 0.9) item.classList.add("is-visible");
    else revealObserver.observe(item);
  });

  const navObserver = new IntersectionObserver((entries) => {
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
  }, { rootMargin: "-32% 0px -55%", threshold: [0, 0.2, 0.5] });

  observedSections.forEach((section) => navObserver.observe(section));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

requestAnimationFrame(() => root.classList.add("motion-ready"));

const portraitStage = document.querySelector("[data-parallax-stage]");
if (portraitStage && finePointer.matches) {
  portraitStage.addEventListener("pointermove", (event) => {
    if (!motionEnabled) return;
    const bounds = portraitStage.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 9;
    portraitStage.style.setProperty("--px", `${x}px`);
    portraitStage.style.setProperty("--py", `${y}px`);
  });
  portraitStage.addEventListener("pointerleave", () => {
    portraitStage.style.setProperty("--px", "0px");
    portraitStage.style.setProperty("--py", "0px");
  });
}

const tabs = [...document.querySelectorAll('[role="tab"]')];
function activateTab(tab) {
  tabs.forEach((item) => {
    const active = item === tab;
    item.setAttribute("aria-selected", String(active));
    item.tabIndex = active ? 0 : -1;
    const panel = document.getElementById(item.getAttribute("aria-controls"));
    if (panel) panel.hidden = !active;
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    activateTab(tabs[next]);
    tabs[next].focus();
  });
});

const expertiseItems = [...document.querySelectorAll(".expertise-list details")];
expertiseItems.forEach((item) => item.addEventListener("toggle", () => {
  if (!item.open) return;
  expertiseItems.forEach((other) => { if (other !== item) other.open = false; });
}));

document.querySelectorAll("[data-current-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
