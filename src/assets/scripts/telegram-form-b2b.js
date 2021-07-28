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
      telegram.classList.add(telegramActiveClass);
    });
  });

  telegramScreenlock.addEventListener("click", () => {
    telegram.classList.remove(telegramActiveClass);
  });

  telegramCloseTrigger.addEventListener("click", () => {
    telegram.classList.remove(telegramActiveClass);
  });
})();
