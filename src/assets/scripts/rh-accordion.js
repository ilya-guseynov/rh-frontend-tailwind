(() => {
  const accordionQuery = ".rh-accordion";
  const accordionTriggerQuery = ".rh-accordion__trigger";
  const accordionActiveClass = "rh-accordion--active";

  const accordionElements = document.querySelectorAll(accordionQuery);

  if (!accordionElements) {
    return;
  }

  accordionElements.forEach(accordion => {
    accordion.querySelector(accordionTriggerQuery).addEventListener("click", () => {
      accordion.classList.toggle(accordionActiveClass);
    });
  });
})();

(() => {
  const accordionQuery = ".RHAccordion";
  const accordionTriggerQuery = ".RHAccordion__Trigger";
  const accordionActiveClass = "RHAccordion--Active";

  const accordionElements = document.querySelectorAll(accordionQuery);

  if (!accordionElements) {
    return;
  }

  accordionElements.forEach(accordion => {
    accordion.querySelector(accordionTriggerQuery).addEventListener("click", () => {
      accordion.classList.toggle(accordionActiveClass);
    });
  });
})();
