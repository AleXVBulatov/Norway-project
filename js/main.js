const slider = tns({
  container: ".header-slider",
  items: 1,
  slideBy: "page",
  autoplay: true,
  controls: false, // убрать кнопки переключения
  autoplayButtonOutput: false, // убрать кнопку стоп
  // mouseDrap: true, // перелистывать мышью (свайпить)
});

const sliderPrev = document.querySelector("#sliderPrev");
const sliderNext = document.querySelector("#sliderNext");

sliderPrev.onclick = function () {
  slider.goTo("prev"); // вызов функции при нажатии на кнопку переключения
};

sliderNext.onclick = function () {
  slider.goTo("next"); // вызов функции при нажатии на кнопку переключения
};

// Инфа на старте:
const sliderInfo = slider.getInfo(); // все свойства объекта

const currentSliderIndex = document.querySelector("#sliderCurrent");
currentSliderIndex.innerText = "0" + sliderInfo.index;

const totalSliderIndex = document.querySelector("#sliderTotal");
totalSliderIndex.innerText = "0" + sliderInfo.pages;

// Инфа при перемещении:

const updateSlideFraction = function () {
  const sliderInfo = slider.getInfo();
  currentSliderIndex.innerText = "0" + (sliderInfo.navCurrentIndex + 1); // Чтобы не показывались номера 0 и 5
};
slider.events.on("indexChanged", updateSlideFraction);

// уменьшение размера шрифта относительно размера экрана
// const bigTitle = document.querySelector(".header-title__big");
// bigTitle.style.fontSize = window.innerWidth / 7.68 + "px";

// console.log((bigTitle.style.fontSize = window.innerWidth / 7.68));
// console.log(window.innerWidth);
