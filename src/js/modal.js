const openBtn = document.querySelector('[data-action="open-modal"]');
const closeBtn = document.querySelector(".close-btn");
const resetBtn = document.querySelector("[type='reset']");
const modal = document.querySelector(".modal");

openBtn.addEventListener("click", onOpenBtn);
closeBtn.addEventListener("click", onCloseBtn);
resetBtn.addEventListener("click", onResetBtn);

function onOpenBtn() {
  modal.showModal();
  modal.classList.remove("hide");
  modal.addEventListener("click", onModalClick);
  document.body.classList.add("lock");
}

function onCloseBtn() {
  closeModal();
}

function onResetBtn() {
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
      document.body.classList.remove("lock");
    },
    { once: true } // to prevent bugs when reopening the modal
  );
}

modal.addEventListener("cancel", () => {
  document.body.classList.remove("lock");
});

modal.addEventListener("close", () => {
  document.body.classList.remove("lock");
});
