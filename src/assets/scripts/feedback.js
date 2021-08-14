(() => {
  const feedback = document.querySelector(".Feedback");
  const feedbackTriggers = document.querySelectorAll(".Feedback__Trigger");

  const feedbackScreenlock = feedback.querySelector(".PopupForm__Screenlock");
  const feedbackCloseTrigger = feedback.querySelector(".PopupForm__TitleClose");

  const feedbackActiveClass = "PopupForm--Active";

  if (!feedback || !feedbackTriggers || !feedbackScreenlock || !feedbackCloseTrigger) {
      return;
  }

  feedbackTriggers.forEach(feedbackTrigger => {
      feedbackTrigger.addEventListener("click", () => {
          setTimeout(() => {
              document.body.style.overflow = "hidden";
          }, 100);
          feedback.classList.add(feedbackActiveClass);
      });
  });

  feedbackScreenlock.addEventListener("click", () => {
      document.body.style.overflow = "auto";
      feedback.classList.remove(feedbackActiveClass);
  });

  feedbackCloseTrigger.addEventListener("click", () => {
      document.body.style.overflow = "auto";
      feedback.classList.remove(feedbackActiveClass);
  });
})();
