const scrollBtn = document.querySelector(".scroll-top");
const scrollWrapper = document.querySelectorAll(
  "[data-action='scroll-to-top']"
);

scrollBtn.addEventListener("click", onScrollBtn);

function onScrollBtn() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const options = {
  rootMargin: "40%",
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      scrollBtn.classList.add("scroll-top_active");
    } else {
      scrollBtn.classList.remove("scroll-top_active");
    }
  });
}, options);

scrollWrapper.forEach((el) => {
  scrollObserver.observe(el);
});
