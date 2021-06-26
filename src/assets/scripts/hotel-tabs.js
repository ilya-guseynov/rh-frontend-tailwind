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
              lazyLoad: "nearby"
            }).mount();
          });
        }, 100);
      }
    });
  });
})();