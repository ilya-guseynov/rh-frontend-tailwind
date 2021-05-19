document.addEventListener( "DOMContentLoaded", () => {
  const sliderElementQuery = ".b2b-top-slider";

  if (document.querySelector(sliderElementQuery)) {
    new Splide(sliderElementQuery, {
      type: "loop",
      autoplay: false,
      arrows: false
    }).mount();
  }
});
