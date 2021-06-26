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

document.addEventListener("DOMContentLoaded", () => {
  const sliderElementQuery = ".HotelPage__PhotoSlider";

  if (document.querySelector(sliderElementQuery)) {
    new Splide(sliderElementQuery, {
      type: "loop",
      autoplay: true,
      perPage: 5,
      autoWidth: true,
      perMove: 1,
      pagination: false,
      lazyLoad: "nearby",
      arrowPath: "M1.06039 38.9541C2.48267 40.3486 4.77972 40.3486 6.202 38.9541L22.9396 22.4452C24.3535 21.0423 24.3535 18.7767 22.9396 17.3738L6.202 0.864871C4.7552 -0.35721 2.59852 -0.275046 1.2516 1.05347C-0.0953188 2.38199 -0.178623 4.50921 1.06039 5.93624L15.209 19.9275L1.06039 33.8827C-0.353463 35.2856 -0.353463 37.5512 1.06039 38.9541Z"
    }).mount();
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     const sliderElementQuery = ".HotelPage__NomerPhotoSlider";

//     document.querySelectorAll(sliderElementQuery).forEach(elem => {
//       new Splide(elem, {
//         type: "loop",
//         autoplay: true,
//         perPage: 3,
//         perMove: 1,
//         direction: "ttb",
//         height: "675px",
//         pagination: false,
//         lazyLoad: "nearby"
//       }).mount();
//     });
//   }, 100);
// });

document.addEventListener("DOMContentLoaded", () => {
  const sliderElementQuery = ".b2b-top-slider";

  if (document.querySelector(sliderElementQuery)) {
    new Splide(sliderElementQuery, {
      type: "loop",
      autoplay: true,
      arrows: false
    }).mount();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const sliderElementQuery = ".with-you-slider";

  if (document.querySelector(sliderElementQuery)) {
    new Splide(sliderElementQuery, {
      type: "loop",
      pagination: false
    }).mount();
  }
});

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

