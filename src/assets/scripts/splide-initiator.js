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
      lazyLoad: "nearby"
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

