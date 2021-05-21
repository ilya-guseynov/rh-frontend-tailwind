(() => {
  const mobileSidebarElement = document.querySelector(".mobile-sidebar");
  const mobileSidebarTriggerElement = document.querySelector(".mobile-sidebar-trigger");
  const mobileSidebarCloseTriggerElement = document.querySelector(".mobile-sidebar__close-trigger");
  const mobileSidebarScreenlockElement = document.querySelector(".mobile-sidebar__screenlock");
  const mobileSidebarItemElements = document.querySelectorAll(".mobile-sidebar__item");

  const mobileSidebarActiveClass = "mobile-sidebar--active";

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

  mobileSidebarItemElements.forEach(mobileSidebarItemElement => {
    const trigger = mobileSidebarItemElement.querySelector(".mobile-sidebar__submenu-trigger");
    const submenu = mobileSidebarItemElement.querySelector(".mobile-sidebar__submenu");
    
    trigger.addEventListener("click", () => {
      document.querySelectorAll(".mobile-sidebar__submenu")
        .forEach(submenuEach => {
          if (submenuEach !== submenu) {
            submenuEach.classList.remove("mobile-sidebar__submenu--active");
          }
        });
      submenu.classList.toggle("mobile-sidebar__submenu--active");
    });
  });

  window.addEventListener("resize", handleResize);
  mobileSidebarTriggerElement.addEventListener("click", openSidebar);
  mobileSidebarCloseTriggerElement.addEventListener("click", closeSidebar);
  mobileSidebarScreenlockElement.addEventListener("click", closeSidebar);
})();
