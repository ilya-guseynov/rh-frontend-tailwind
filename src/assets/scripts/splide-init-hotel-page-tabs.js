document.addEventListener("DOMContentLoaded", () => {
  const sliderElementQuery = ".HotelPage__TabsContainer--Scroll";

  if (document.querySelector(sliderElementQuery)) {
    new Splide(sliderElementQuery, {
      autoplay: false,
      arrows: false,
      perMove: 1,
      pagination: false,
      autoWidth: true,
    }).mount();
  }
});
