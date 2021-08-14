(() => {
  const telegram = document.querySelector(".Telegram");
  const telegramTriggers = document.querySelectorAll(".Telegram__Trigger");

  const telegramScreenlock = telegram.querySelector(".PopupForm__Screenlock");
  const telegramCloseTrigger = telegram.querySelector(".PopupForm__TitleClose");

  const telegramActiveClass = "PopupForm--Active";
  console.log("here");

  if (!telegram || !telegramTriggers || !telegramScreenlock || !telegramCloseTrigger) {
    return;
  }


  telegramTriggers.forEach(telegramTrigger => {
    telegramTrigger.addEventListener("click", () => {
      setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 100);
      telegram.classList.add(telegramActiveClass);
    });
  });

  telegramScreenlock.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    telegram.classList.remove(telegramActiveClass);
  });

  telegramCloseTrigger.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    telegram.classList.remove(telegramActiveClass);
  });
})();
