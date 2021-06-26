(() => {
  const dataTriggerAttributeName = "hotel-tab-trigger-index";
  const dataAttributeName = "hotel-data";
  const goldBgClass = "HotelPage__TabLink--Active";
  
  const attributeNameToQuery = attributeName => `[${attributeName}]`;
  const createQueryForDataById = id => `[${dataAttributeName} = "${id}"]`;
  const createQueryForTriggerById = id => `[${dataTriggerAttributeName} = "${id}"]`;
  const hideElement = element => { element.style.display = "none"; };
  const showElement = element => { element.style.display = "block"; };

  let hotelPhotosInited = false;

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
        hotelPhotosInited = true;

        setTimeout(() => {
          const sliderElementQuery = ".HotelPage__NomerPhotoSlider";
      
          document.querySelectorAll(sliderElementQuery).forEach(elem => {
            new Splide(elem, {
              type: "loop",
              autoplay: true,
              perPage: 3,
              perMove: 1,
              direction: "ttb",
              height: "675px",
              pagination: false,
              lazyLoad: "nearby",
              arrowPath: "M2.0162 39.9541C3.37923 41.3486 5.58056 41.3486 6.94359 39.9541L22.9838 23.4452C24.3387 22.0423 24.3387 19.7767 22.9838 18.3738L6.94359 1.86487C5.55707 0.64279 3.49025 0.724954 2.19945 2.05347C0.908654 3.38199 0.828821 5.50921 2.0162 6.93624L15.5752 20.9275L2.0162 34.8827C0.661266 36.2856 0.661266 38.5512 2.0162 39.9541Z"
            }).mount();
          });
        }, 100);
      }
    });
  });
})();