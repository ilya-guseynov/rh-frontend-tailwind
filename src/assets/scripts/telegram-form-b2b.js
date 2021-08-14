(() => {
  const telegram = document.querySelector(".TelegramForm");
  const telegramTriggers = document.querySelectorAll(".Telegram__Trigger");
  const telegramScreenlock = document.querySelector(".TelegramForm__Screenlock");
  const telegramCloseTrigger = document.querySelector(".TelegramForm__CloseTrigger");

  const telegramActiveClass = "TelegramForm--Active";

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
