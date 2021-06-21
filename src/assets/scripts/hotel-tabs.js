(() => {
  const dataTriggerAttributeName = "hotel-tab-trigger-index";
  const dataAttributeName = "hotel-data";
  const goldBgClass = "HotelPage__TabLink--Active";
  
  const attributeNameToQuery = attributeName => `[${attributeName}]`;
  const createQueryForDataById = id => `[${dataAttributeName} = "${id}"]`;
  const createQueryForTriggerById = id => `[${dataTriggerAttributeName} = "${id}"]`;
  const hideElement = element => { element.style.display = "none"; };
  const showElement = element => { element.style.display = "block"; };

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
    });
  });
})();