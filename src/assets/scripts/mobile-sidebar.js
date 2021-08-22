(() => {
  const mobileSidebarElement = document.querySelector(".MobileSidebar");
  const mobileSidebarTriggerElement = document.querySelector(".mobile-sidebar-trigger");
  const mobileSidebarCloseTriggerElement = document.querySelector(".MobileSidebar__CloseTrigger");
  const mobileSidebarScreenlockElement = document.querySelector(".MobileSidebar__ScreenLock");
  const mobileSidebarItemElements = document.querySelectorAll(".MobileSidebar__SecondContentItem");

  const mobileSidebarActiveClass = "MobileSidebar--Active";

  const triggersClassList = [
    "Tourists__Trigger",
    "Feedback__Trigger",
    "Telegram__Trigger",
  ];

  if (
    !mobileSidebarElement
    || !mobileSidebarTriggerElement
    || !mobileSidebarCloseTriggerElement
    || !mobileSidebarScreenlockElement
    || mobileSidebarItemElements.length === 0
  ) {
    return;
  }
 
  const openSidebar = () => {
    document.body.style.overflow = "hidden";
    mobileSidebarElement.classList.add(mobileSidebarActiveClass);
  };

  const closeSidebar = () => {
    document.body.style.overflow = "auto";
    mobileSidebarElement.classList.remove(mobileSidebarActiveClass);
  };

  const handleResize = () => {
    const mobileWidthLimit = 769;

    if (window.innerWidth >= mobileWidthLimit) {
      closeSidebar();
    }
  };

  document.querySelectorAll(".MobileSidebar__FirstContentLink").forEach(link => {
    link.addEventListener("click", () => {
      if (triggersClassList.includes(link.classList[link.classList.length - 1])) {
        closeSidebar();
      }
    });
  });

  mobileSidebarItemElements.forEach(mobileSidebarItemElement => {
    const trigger = mobileSidebarItemElement.querySelector(".MobileSidebar__SecondContentSubmenuTrigger");
    const submenu = mobileSidebarItemElement.querySelector(".MobileSidebar__SecondContentSubmenu");

    trigger.addEventListener("click", () => {
      document.querySelectorAll(".MobileSidebar__SecondContentSubmenu")
        .forEach(submenuEach => {
          if (submenuEach !== submenu) {
            submenuEach.classList.remove("MobileSidebar__SecondContentSubmenu--Active");
          }
        });
      submenu.classList.toggle("MobileSidebar__SecondContentSubmenu--Active");
    });
  });

  window.addEventListener("resize", handleResize);
  mobileSidebarTriggerElement.addEventListener("click", openSidebar);
  mobileSidebarCloseTriggerElement.addEventListener("click", closeSidebar);
  mobileSidebarScreenlockElement.addEventListener("click", closeSidebar);
})();
