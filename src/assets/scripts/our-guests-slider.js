document.addEventListener("DOMContentLoaded", () => {
  const sliderElementQuery = ".our-guests-slider";
  const sliderElementQueryMobile = ".our-guests-slider--mobile";

  if (document.querySelector(sliderElementQuery)) {
    new Splide(sliderElementQuery, {
      type: "loop",
      autoplay: true,
      arrows: true,
      pagination: false,
      gap: 20,
      perPage: 3
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
