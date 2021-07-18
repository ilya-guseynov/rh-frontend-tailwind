(() => {
  const dataTriggerAttributeName = "hotel-tab-trigger-index";
  const dataAttributeName = "hotel-data";
  const goldBgClass = "HotelPage__TabLink--Active";
  
  const attributeNameToQuery = attributeName => `[${attributeName}]`;
  const createQueryForDataById = id => `[${dataAttributeName} = "${id}"]`;
  const hideElement = element => { element.style.display = "none"; };
  const showElement = element => { element.style.display = "block"; };
  
  let hotelPhotosInited = false;

  const initSliders = () => {
    hotelPhotosInited = true;

    setTimeout(() => {
      const nomerElementQuery = ".HotelPage__Nomer";
      
      document.querySelectorAll(nomerElementQuery).forEach(nomer => {
        const sliderDesktopElementQuery = ".HotelPage__NomerPhotoSlider";
        const sliderMobileElementQuery = ".HotelPage__NomerMobilePhotoSlider";
        const sliderPopupElementQuery = ".HotelPage__NomerPopupPhotoSlider--Desktop";

        const splideDesktop = new Splide(nomer.querySelector(sliderDesktopElementQuery), {
          type: "loop",
          autoplay: true,
          perPage: 3,
          perMove: 1,
          direction: "ttb",
          height: "675px",
          pagination: false,
          lazyLoad: "nearby",
          preloadPages: 3,
          arrowPath: "M2.0162 39.9541C3.37923 41.3486 5.58056 41.3486 6.94359 39.9541L22.9838 23.4452C24.3387 22.0423 24.3387 19.7767 22.9838 18.3738L6.94359 1.86487C5.55707 0.64279 3.49025 0.724954 2.19945 2.05347C0.908654 3.38199 0.828821 5.50921 2.0162 6.93624L15.5752 20.9275L2.0162 34.8827C0.661266 36.2856 0.661266 38.5512 2.0162 39.9541Z"
        }).mount();

        const sliderMobile = new Splide(nomer.querySelector(sliderMobileElementQuery), {
          type: "loop",
          autoplay: true,
          perPage: 1,
          perMove: 1,
          pagination: false,
          lazyLoad: "nearby",
          preloadPages: 3,
          gap: "2em",
          arrowPath: "M1.06039 38.9541C2.48267 40.3486 4.77972 40.3486 6.202 38.9541L22.9396 22.4452C24.3535 21.0423 24.3535 18.7767 22.9396 17.3738L6.202 0.864871C4.7552 -0.35721 2.59852 -0.275046 1.2516 1.05347C-0.0953188 2.38199 -0.178623 4.50921 1.06039 5.93624L15.209 19.9275L1.06039 33.8827C-0.353463 35.2856 -0.353463 37.5512 1.06039 38.9541Z"
        }).mount();

        const sliderPopup = new Splide(nomer.querySelector(sliderPopupElementQuery), {
          type: "loop",
          autoplay: true,
          perPage: 1,
          perMove: 1,
          pagination: false,
          lazyLoad: "nearby",
          preloadPages: 3,
          arrowPath: "M1.06039 38.9541C2.48267 40.3486 4.77972 40.3486 6.202 38.9541L22.9396 22.4452C24.3535 21.0423 24.3535 18.7767 22.9396 17.3738L6.202 0.864871C4.7552 -0.35721 2.59852 -0.275046 1.2516 1.05347C-0.0953188 2.38199 -0.178623 4.50921 1.06039 5.93624L15.209 19.9275L1.06039 33.8827C-0.353463 35.2856 -0.353463 37.5512 1.06039 38.9541Z"
        });

        sliderPopup.sync(splideDesktop).mount();
        
        splideDesktop.on("click", () => {
          nomer.querySelector(".HotelPage__NomerPopupPhotoSliderContainer").classList.add("HotelPage__NomerPopupPhotoSliderContainer--ActiveDesktop");
        });

        nomer.querySelector(".HotelPage__NomerPopupScreenlock").addEventListener("click", () => {
          nomer.querySelector(".HotelPage__NomerPopupPhotoSliderContainer").classList.remove("HotelPage__NomerPopupPhotoSliderContainer--ActiveMobile", "HotelPage__NomerPopupPhotoSliderContainer--ActiveDesktop");
        });
      });
    }, 100);
  };

  const datas = document.querySelectorAll(attributeNameToQuery(dataAttributeName));
  const dataTriggers = document.querySelectorAll(attributeNameToQuery(dataTriggerAttributeName));

  datas.forEach(data => hideElement(data));

  dataTriggers.forEach(dataTrigger => {
    dataTrigger.addEventListener("click", () => {
      datas.forEach(data => hideElement(data));

      dataTriggers.forEach(dataTrigger2 => {
        dataTrigger2.classList.remove(goldBgClass);
      });

      dataTrigger.classList.add(goldBgClass);

      showElement(
        document.querySelector(
          createQueryForDataById(dataTrigger.getAttribute(dataTriggerAttributeName))
        )
      );

      if (dataTrigger.getAttribute(dataTriggerAttributeName) === "6" && !hotelPhotosInited) {
        initSliders();
      }
    });
  });

  if (document.querySelector("[hotel-tab-trigger-index='1']")) {
    document.querySelector("[hotel-tab-trigger-index='1']").click();
  }
})();