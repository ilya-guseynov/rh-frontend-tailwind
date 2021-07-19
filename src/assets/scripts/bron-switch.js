(() => {
  const bronSwtichTriggerButtons = document.querySelectorAll(".Bron__SwitchButton");
  const bronContentBlocks = document.querySelectorAll(".Bron__Content");

  if (!bronSwtichTriggerButtons || !bronContentBlocks) {
    return;
  }

  bronSwtichTriggerButtons.forEach(button => {
    button.addEventListener("click", () => {
      bronSwtichTriggerButtons.forEach(buttonToRemoveActiveStatus => {
        buttonToRemoveActiveStatus.classList.remove("Bron__SwitchButton--Active");
      });

      button.classList.add("Bron__SwitchButton--Active");

      bronContentBlocks.forEach(bronContentBlock => {
        bronContentBlock.classList.remove("Bron__Content--Active");
        if (bronContentBlock.getAttribute("bron-content") === button.getAttribute("bron-switch-trigger")) {
          bronContentBlock.classList.add("Bron__Content--Active");
        }
      });
    });
  });

  if (bronSwtichTriggerButtons[0]) {
    bronSwtichTriggerButtons[0].click();
  }
})();