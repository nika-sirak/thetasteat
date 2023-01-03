const spinner = document.querySelector(".spinner");

function hideSpinner() {
  spinner.classList.add("spinner_hidden");
}

window.addEventListener("load", () => {
  setTimeout(() => {
    hideSpinner();
  }, 400);
});
