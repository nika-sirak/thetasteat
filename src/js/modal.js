const openBtn = document.querySelector('[data-action="open-modal"]');
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");

openBtn.addEventListener("click", onOpenBtn);
closeBtn.addEventListener("click", onCloseBtn);

function onOpenBtn() {
  modal.showModal();
  modal.classList.remove("hide");
  modal.addEventListener("click", onModalClick);
}

function onCloseBtn() {
  closeModal();
}

function onModalClick(e) {
  if (e.target === modal) {
    closeModal();
  }
}

function closeModal() {
  modal.classList.add("hide");
  modal.addEventListener(
    "animationend",
    () => {
      modal.classList.remove("hide");
      modal.close();
    },
    { once: true } // to prevent bugs when reopening the modal
  );
}
