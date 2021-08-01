(() => {
  const tourists = document.querySelector(".Tourists");
  const touristsTriggers = document.querySelectorAll(".Tourists__Trigger");
  const touristsScreenlock = document.querySelector(".Tourists__Screenlock");
  const touristsCloseTrigger = document.querySelector(".Tourists__CloseTrigger");

  const touristsActiveClass = "Tourists--Active";

  if (!tourists || !touristsTriggers || !touristsScreenlock || !touristsCloseTrigger) {
    return;
  }

  touristsTriggers.forEach(touristsTrigger => {
    touristsTrigger.addEventListener("click", () => {
      tourists.classList.add(touristsActiveClass);
    });
  });

  touristsScreenlock.addEventListener("click", () => {
    tourists.classList.remove(touristsActiveClass);
  });

  touristsCloseTrigger.addEventListener("click", () => {
    tourists.classList.remove(touristsActiveClass);
  });

  document.querySelectorAll(".Tourists__Checkbox").forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      document.querySelectorAll(".Tourists__Checkbox").forEach(checkbox2 => {
        checkbox2.checked = false;
      });
      checkbox.checked = true;
    });
  });
})();
