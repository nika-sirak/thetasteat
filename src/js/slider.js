//refs
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const sliderEl = document.querySelector(".slider");
const sliderItem = document.querySelectorAll(".feedback__li");
const bottomEl = document.querySelector(".feedback__bottom");

//var
let sliderNum = 1;
const length = sliderItem.length;

//radio buttons
for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.classList.add("feedback__btn");
  bottomEl.appendChild(div);
}

const buttonsEl = document.querySelectorAll(".feedback__btn");
buttonsEl[0].classList.add("feedback__btn-active");

const resetBtnStyle = () => {
  buttonsEl.forEach((el) => {
    el.classList.remove("feedback__btn-active");
  });
};

buttonsEl.forEach((el, i) =>
  el.addEventListener("click", () => {
    resetBtnStyle();
    sliderEl.style.transform = `translateX(-${i * 544}px)`;
    sliderNum = i + 1;
    el.classList.add("feedback__btn-active");
  })
);

//arrow slider
const nextSlide = () => {
  sliderEl.style.transform = `translateX(-${sliderNum * 544}px)`;
  sliderNum += 1;
};

const firstSlide = () => {
  sliderEl.style.transform = `translateX(0px)`;
  sliderNum = 1;
};

const prevSlide = () => {
  sliderEl.style.transform = `translateX(-${(sliderNum - 2) * 544}px)`;
  sliderNum -= 1;
};

const lastSlide = () => {
  sliderEl.style.transform = `translateX(-${(length - 1) * 544}px)`;
  sliderNum = length;
};

const changeBtnColor = () => {
  resetBtnStyle();
  buttonsEl[sliderNum - 1].classList.add("feedback__btn-active");
};

leftArrow.addEventListener("click", onLeftArrow);
rightArrow.addEventListener("click", onRightArrow);

function onRightArrow() {
  sliderNum < length ? nextSlide() : firstSlide();
  changeBtnColor();
}

function onLeftArrow() {
  sliderNum > 1 ? prevSlide() : lastSlide();
  changeBtnColor();
}
