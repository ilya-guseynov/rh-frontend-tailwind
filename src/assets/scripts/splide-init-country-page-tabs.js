document.addEventListener("DOMContentLoaded", () => {
  const sliderElementQuery = ".CountryPage__TabsContainer--Scroll";

  if (document.querySelector(sliderElementQuery)) {
    new Splide(sliderElementQuery, {
      autoplay: false,
      arrows: false,
      pagination: false,
      autoWidth: true,
    }).mount();
  }
});
