document.addEventListener("DOMContentLoaded", () => {
  const sliderElementQuery = ".b2c-blog-slider";
  const sliderElementQueryMobile = ".b2c-blog-slider--mobile";

  if (document.querySelector(sliderElementQuery)) {
    new Splide(sliderElementQuery, {
      type: "loop",
      autoplay: false,
      arrows: true,
      pagination: false,
      gap: 20,
      perPage: 4
    }).mount();
  }

  if (document.querySelector(sliderElementQueryMobile)) {
    new Splide(sliderElementQueryMobile, {
      type: "loop",
      autoplay: true,
      arrows: true,
      pagination: false,
      perPage: 1
    }).mount();
  }
});
