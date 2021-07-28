(() => {
  const dataSectionTriggerAttributeName = "rh-country-data-section-trigger";
  const dataSectionAttributeName = "rh-country-data-section";
  const dataTriggerAttributeName = "rh-country-data-trigger";
  const dataAttributeName = "rh-country-data";
  const dataTitleAttributeName = "rh-country-data-title";
  const goldBgClass = "CountryPage__TabLink--Active";

  /**
   * @param {string} attributeName
   * @returns  {string}
   */
  const attributeNameToQuery = attributeName => `[${attributeName}]`;

  /**
   * @param {string | number} id
   * @returns {void}
   */
   const createQueryForDataById = id => `[${dataAttributeName} = "${id}"]`;

  /**
   * @param {string | number} id
   * @returns {void}
   */
  const createQueryForDataSectionById = id => `[${dataSectionAttributeName} = "${id}"]`;

   /**
   * @param {string | number} id
   * @returns {void}
   */
  const createQueryForDataTitleById = id => `[${dataTitleAttributeName} = "${id}"]`;

  /**
   * @param {HTMLElement} element
   * @returns {void} 
   */
  const hideElement = element => {
    element.style.display = "none";
  };

  /**
   * @param {HTMLElement} element
   * @returns {void} 
   */
  const showElement = element => {
    element.style.display = "block";
  };

  const datas = document.querySelectorAll(attributeNameToQuery(dataAttributeName));
  const dataSections = document.querySelectorAll(attributeNameToQuery(dataSectionAttributeName));
  const dataTriggers = document.querySelectorAll(attributeNameToQuery(dataTriggerAttributeName));
  const dataTitles = document.querySelectorAll(attributeNameToQuery(dataTitleAttributeName));

  datas.forEach(data => hideElement(data));
  dataSections.forEach(dataSection => hideElement(dataSection));

  dataTriggers.forEach(dataTrigger => {
    dataTrigger.addEventListener("click", () => {
      datas.forEach(data => hideElement(data));
      dataSections.forEach(dataSection => hideElement(dataSection));
      dataTitles.forEach(dataTitle => dataTitle.classList.remove(goldBgClass));

      showElement(
        document.querySelector(
          createQueryForDataById(dataTrigger.getAttribute(dataTriggerAttributeName))
        )
      );
      showElement(
        document.querySelector(createQueryForDataSectionById(
          dataTrigger.getAttribute(dataSectionTriggerAttributeName)
        ))
      );
      document.querySelectorAll(createQueryForDataTitleById(
        dataTrigger.getAttribute(dataTriggerAttributeName)
      )).forEach(dataTitle => dataTitle.classList.add(goldBgClass));
    });
  });

  if (datas[0] && dataSections[0] && dataTitles[0]) {
    showElement(datas[0]);
    showElement(dataSections[0]);
    dataTitles[0].classList.add(goldBgClass);
  }
})();