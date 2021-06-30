document.addEventListener("DOMContentLoaded", () => {
  const sliderElementQuery = ".MobileWithYou__SplideRoot";

  if (document.querySelector(sliderElementQuery)) {
    new Splide(sliderElementQuery, {
      type: "loop",
      pagination: false
    }).mount();
  }
});
