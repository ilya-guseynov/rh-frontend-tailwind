(() => {
  const tourSearchButtonElement = document.querySelector(".search-form-switch__button_tour");
  const hotelSearchButtonElement = document.querySelector(".search-form-switch__button_hotel");
  const tourSearchFormElement = document.querySelector(".search-form-switch__form_tour");
  const hotelSearchFormElement = document.querySelector(".search-form-switch__form_hotel");

  if (
    !tourSearchButtonElement 
    || !hotelSearchButtonElement
    || !tourSearchFormElement
    || !hotelSearchFormElement
  ) {
    return;
  }

  const buttonActiveClass = "search-form-switch__button--active";
  const formActiveClass = "search-form-switch__form--active";

  tourSearchButtonElement.addEventListener("click", () => {
    tourSearchButtonElement.classList.add(buttonActiveClass);
    tourSearchFormElement.classList.add(formActiveClass);
    hotelSearchButtonElement.classList.remove(buttonActiveClass);
    hotelSearchFormElement.classList.remove(formActiveClass);
  });

  hotelSearchButtonElement.addEventListener("click", () => {
    hotelSearchButtonElement.classList.add(buttonActiveClass);
    hotelSearchFormElement.classList.add(formActiveClass);
    tourSearchButtonElement.classList.remove(buttonActiveClass);
    tourSearchFormElement.classList.remove(formActiveClass);
  });
})();
