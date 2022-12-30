const menuBtnEl = document.querySelector(".btn-menu");
const menuBodyEl = document.querySelector(".nav");
const menuLinksEl = document.querySelectorAll(".menu__link");

if (menuBtnEl) {
  menuBtnEl.addEventListener("click", onMenuBtnEl);
}

function onMenuBtnEl() {
  menuBtnEl.classList.toggle("active");
  menuBodyEl.classList.toggle("active");
  document.body.classList.toggle("lock");
}

if (menuLinksEl.length > 0) {
  menuLinksEl.forEach((menuLink) =>
    menuLink.addEventListener("click", onMenuLinkEl)
  );
}

function onMenuLinkEl() {
  if (menuBtnEl.classList.contains("active")) {
    menuBtnEl.classList.remove("active");
    menuBodyEl.classList.remove("active");
    document.body.classList.remove("lock");
  }
}

//animation
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
