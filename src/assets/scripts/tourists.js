(() => {
    const tourists = document.querySelector(".Tourists");
    const touristsTriggers = document.querySelectorAll(".Tourists__Trigger");

    const touristsScreenlock = tourists.querySelector(".PopupForm__Screenlock");
    const touristsCloseTrigger = tourists.querySelector(".PopupForm__TitleClose");

    const touristsActiveClass = "PopupForm--Active";

    if (!tourists || !touristsTriggers || !touristsScreenlock || !touristsCloseTrigger) {
        return;
    }

    touristsTriggers.forEach(touristsTrigger => {
        touristsTrigger.addEventListener("click", () => {
        setTimeout(() => {
            document.body.style.overflow = "hidden";
        }, 100);
        tourists.classList.add(touristsActiveClass);
        });
    });

    touristsScreenlock.addEventListener("click", () => {
        document.body.style.overflow = "auto";
        tourists.classList.remove(touristsActiveClass);
    });

    touristsCloseTrigger.addEventListener("click", () => {
        document.body.style.overflow = "auto";
        tourists.classList.remove(touristsActiveClass);
    });
})();
  
