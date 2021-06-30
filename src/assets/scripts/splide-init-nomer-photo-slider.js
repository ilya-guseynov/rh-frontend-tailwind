document.addEventListener("DOMContentLoaded", () => {
  const sliderElementQuery = ".HotelPage__PhotoSlider";

  if (document.querySelector(sliderElementQuery)) {
    const splide = new Splide(sliderElementQuery, {
      type: "loop",
      autoplay: true,
      autoWidth: true,
      perPage: 5,
      perMove: 1,
      pagination: false,
      lazyLoad: "nearby",
      preloadPages: 5,
      throttle: 10,
      arrowPath: "M1.06039 38.9541C2.48267 40.3486 4.77972 40.3486 6.202 38.9541L22.9396 22.4452C24.3535 21.0423 24.3535 18.7767 22.9396 17.3738L6.202 0.864871C4.7552 -0.35721 2.59852 -0.275046 1.2516 1.05347C-0.0953188 2.38199 -0.178623 4.50921 1.06039 5.93624L15.209 19.9275L1.06039 33.8827C-0.353463 35.2856 -0.353463 37.5512 1.06039 38.9541Z"
    }).mount();
  }
});
