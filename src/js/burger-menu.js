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
