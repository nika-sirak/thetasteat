const openBtn = document.querySelector('[data-action="open-modal"]');
const modal = document.querySelector(".modal");

openBtn.addEventListener("click", onOpenBtn);

function onOpenBtn() {
  modal.showModal();
}
