document.addEventListener("DOMContentLoaded", () => {
  const sliderElementQuery = ".with-you-slider";

  if (document.querySelector(sliderElementQuery)) {
    new Splide(sliderElementQuery, {
      type: "loop",
      pagination: false
    }).mount();
  }
});
