(() => {
  const feedback = document.querySelector(".Feedback");
  const feedbackTriggers = document.querySelectorAll(".Feedback__Trigger");
  const feedbackScreenlock = document.querySelector(".Feedback__Screenlock");
  const feedbackCloseTrigger = document.querySelector(".Feedback__CloseTrigger");

  const feedbackActiveClass = "Feedback--Active";

  if (!feedback || !feedbackTriggers || !feedbackScreenlock || !feedbackCloseTrigger) {
    return;
  }

  feedbackTriggers.forEach(feedbackTrigger => {
    feedbackTrigger.addEventListener("click", () => {
      feedback.classList.add(feedbackActiveClass);
    });
  });

  feedbackScreenlock.addEventListener("click", () => {
    feedback.classList.remove(feedbackActiveClass);
  });

  feedbackCloseTrigger.addEventListener("click", () => {
    feedback.classList.remove(feedbackActiveClass);
  });
})();
