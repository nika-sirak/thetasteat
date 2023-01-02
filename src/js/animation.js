const menuEl = document.querySelectorAll(".menu-list__item");
menuEl.forEach((el) => {
  el.classList.add("hidden_translate-right");
  el.setAttribute("data-action", "animate-traslate-right");
});

const blurObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation_blur");
    }
  });
});
const blurEl = document.querySelectorAll('[data-action="animate-blur"]');
blurEl.forEach((el) => blurObserver.observe(el));

const transLeftObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation_translate-left");
    }
  });
});
const scheduleEl = document.querySelectorAll(
  '[data-action="animate-traslate-left"]'
);
scheduleEl.forEach((el) => transLeftObserver.observe(el));

const transRightObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation_translate-right");
    }
  });
});
const offerEl = document.querySelectorAll(
  '[data-action="animate-traslate-right"]'
);
offerEl.forEach((el) => transRightObserver.observe(el));
