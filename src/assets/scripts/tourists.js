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

    document.querySelectorAll(".Feedback__Checkbox").forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            document.querySelectorAll(".Feedback__Checkbox").forEach(checkbox2 => {
                checkbox2.checked = false;
            });
            checkbox.checked = true;
        });
    });
})();
