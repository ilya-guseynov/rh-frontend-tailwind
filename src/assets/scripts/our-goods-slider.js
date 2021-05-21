document.addEventListener("DOMContentLoaded", () => {
  const sliderElementQuery = ".our-goods-slider";

  if (document.querySelector(sliderElementQuery)) {
    new Splide(sliderElementQuery, {
      type: "loop",
      autoplay: false,
      arrows: false,
      perPage: 1
    }).mount();
  }
});
