(() => {
  const b2cMenuQuery = ".b2c-menu";
  const b2cMenuContentQuery = ".b2c-menu__content";
  const b2cTriggerQuery = ".b2c-menu__trigger";

  const b2cMenuActiveClass = "b2c-menu--active";
  const b2cMenuToRightClass = "b2c-menu--to-right";

  const b2cMenuElement = document.querySelector(b2cMenuQuery);
  const b2cMenuContentElement = document.querySelector(b2cMenuContentQuery);
  const b2cTriggerElement = document.querySelector(b2cTriggerQuery);

  if (!b2cMenuElement && !b2cMenuContentElement && !b2cTriggerElement) {
    return;
  }

  b2cMenuContentElement.style.animation = "none";
  
  const handleScroll = () => {
    if (window.scrollY - 232 > 0) {
      b2cMenuElement.classList.add(b2cMenuToRightClass);
    } else {
      b2cMenuElement.classList.remove(b2cMenuToRightClass);
    }
  };

  const toggleMenu = () => {
    b2cMenuContentElement.style.animation = "";
    b2cMenuElement.classList.toggle(b2cMenuActiveClass);
  };

  b2cTriggerElement.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", handleScroll);
})();