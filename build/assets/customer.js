"use strict";!function(){var e="b2c-menu--to-right",t=document.querySelector(".b2c-menu"),o=document.querySelector(".b2c-menu__content"),n=document.querySelector(".b2c-menu__trigger");(t||o||n)&&(o.style.animation="none",n.addEventListener("click",function(){o.style.animation="",t.classList.toggle("b2c-menu--active")}),window.addEventListener("scroll",function(){0<window.scrollY-232?t.classList.add(e):t.classList.remove(e)}))}(),function(){function e(e){return"[".concat(e,"]")}function o(e){e.style.display="none"}function n(e){e.style.display="block"}var c="rh-country-data-section",r="rh-country-data-trigger",i="rh-country-data",a="rh-country-data-title",l="CountryPage__TabLink--Active",u=document.querySelectorAll(e(i)),d=document.querySelectorAll(e(c)),t=document.querySelectorAll(e(r)),s=document.querySelectorAll(e(a));u.forEach(o),d.forEach(o),s.forEach(function(e){return e.classList.remove(l)}),t.forEach(function(t){t.addEventListener("click",function(){var e;u.forEach(o),d.forEach(o),s.forEach(function(e){return e.classList.remove(l)}),n(document.querySelector((e=t.getAttribute(r),"[".concat(i,' = "').concat(e,'"]')))),n(document.querySelector((e=t.getAttribute("rh-country-data-section-trigger"),"[".concat(c,' = "').concat(e,'"]')))),document.querySelectorAll((e=t.getAttribute(r),"[".concat(a,' = "').concat(e,'"]'))).forEach(function(e){return e.classList.add(l)})})})}(),function(){var t=document.querySelector(".Feedback"),e=document.querySelectorAll(".Feedback__Trigger"),o=document.querySelector(".Feedback__Screenlock"),n=document.querySelector(".Feedback__CloseTrigger"),c="Feedback--Active";t&&e&&o&&n&&(e.forEach(function(e){e.addEventListener("click",function(){t.classList.add(c)})}),o.addEventListener("click",function(){t.classList.remove(c)}),n.addEventListener("click",function(){t.classList.remove(c)}))}(),function(){function e(e){return"[".concat(e,"]")}function o(e){e.style.display="none"}var n="hotel-tab-trigger-index",c="hotel-data",r="HotelPage__TabLink--Active",i=!1,a=document.querySelectorAll(e(c)),l=document.querySelectorAll(e(n));a.forEach(o),l.forEach(function(t){t.addEventListener("click",function(){var e;a.forEach(o),l.forEach(function(e){e.classList.remove(r)}),t.classList.add(r),document.querySelector((e=t.getAttribute(n),"[".concat(c,' = "').concat(e,'"]'))).style.display="block","6"!==t.getAttribute(n)||i||(i=!0,setTimeout(function(){document.querySelectorAll(".HotelPage__Nomer").forEach(function(e){var t=new Splide(e.querySelector(".HotelPage__NomerPhotoSlider"),{type:"loop",autoplay:!0,perPage:3,perMove:1,direction:"ttb",height:"675px",pagination:!1,lazyLoad:"nearby",arrowPath:"M2.0162 39.9541C3.37923 41.3486 5.58056 41.3486 6.94359 39.9541L22.9838 23.4452C24.3387 22.0423 24.3387 19.7767 22.9838 18.3738L6.94359 1.86487C5.55707 0.64279 3.49025 0.724954 2.19945 2.05347C0.908654 3.38199 0.828821 5.50921 2.0162 6.93624L15.5752 20.9275L2.0162 34.8827C0.661266 36.2856 0.661266 38.5512 2.0162 39.9541Z"}).mount();new Splide(e.querySelector(".HotelPage__NomerMobilePhotoSlider"),{type:"loop",autoplay:!0,perPage:1,perMove:1,pagination:!1,lazyLoad:"nearby",preloadPages:3,gap:"2em",throttle:10,arrowPath:"M1.06039 38.9541C2.48267 40.3486 4.77972 40.3486 6.202 38.9541L22.9396 22.4452C24.3535 21.0423 24.3535 18.7767 22.9396 17.3738L6.202 0.864871C4.7552 -0.35721 2.59852 -0.275046 1.2516 1.05347C-0.0953188 2.38199 -0.178623 4.50921 1.06039 5.93624L15.209 19.9275L1.06039 33.8827C-0.353463 35.2856 -0.353463 37.5512 1.06039 38.9541Z"}).sync(t).mount()})},100))})})}(),function(){var e,t=document.querySelector(".mobile-sidebar"),o=document.querySelector(".mobile-sidebar-trigger"),n=document.querySelector(".mobile-sidebar__close-trigger"),c=document.querySelector(".mobile-sidebar__screenlock"),r=document.querySelectorAll(".mobile-sidebar__item"),i="mobile-sidebar--active";t&&o&&n&&c&&0!==r.length&&(e=function(){document.body.style.overflow="auto",t.classList.remove(i)},r.forEach(function(e){var t=e.querySelector(".mobile-sidebar__submenu-trigger"),o=e.querySelector(".mobile-sidebar__submenu");t.addEventListener("click",function(){document.querySelectorAll(".mobile-sidebar__submenu").forEach(function(e){e!==o&&e.classList.remove("mobile-sidebar__submenu--active")}),o.classList.toggle("mobile-sidebar__submenu--active")})}),window.addEventListener("resize",function(){769<=window.innerWidth&&e()}),o.addEventListener("click",function(){document.body.style.overflow="hidden",t.classList.add(i)}),n.addEventListener("click",e),c.addEventListener("click",e))}(),function(){var e,t=document.querySelector(".MobileSidebar"),o=document.querySelector(".mobile-sidebar-trigger"),n=document.querySelector(".MobileSidebar__CloseTrigger"),c=document.querySelector(".MobileSidebar__ScreenLock"),r=document.querySelectorAll(".MobileSidebar__SecondContentItem"),i="MobileSidebar--Active";t&&o&&n&&c&&0!==r.length&&(e=function(){document.body.style.overflow="auto",t.classList.remove(i)},r.forEach(function(e){var t=e.querySelector(".MobileSidebar__SecondContentSubmenuTrigger"),o=e.querySelector(".MobileSidebar__SecondContentSubmenu");t.addEventListener("click",function(){document.querySelectorAll(".MobileSidebar__SecondContentSubmenu").forEach(function(e){e!==o&&e.classList.remove("MobileSidebar__SecondContentSubmenu--Active")}),o.classList.toggle("MobileSidebar__SecondContentSubmenu--Active")})}),window.addEventListener("resize",function(){769<=window.innerWidth&&e()}),o.addEventListener("click",function(){document.body.style.overflow="hidden",t.classList.add(i)}),n.addEventListener("click",e),c.addEventListener("click",e))}(),function(){var e=document.querySelectorAll(".rh-accordion");e&&e.forEach(function(e){e.querySelector(".rh-accordion__trigger").addEventListener("click",function(){e.classList.toggle("rh-accordion--active")})})}(),function(){var e=document.querySelectorAll(".RHAccordion");e&&e.forEach(function(e){e.querySelector(".RHAccordion__Trigger").addEventListener("click",function(){e.classList.toggle("RHAccordion--Active")})})}(),function(){var e,t,o=document.querySelector(".search-form-switch__button_tour"),n=document.querySelector(".search-form-switch__button_hotel"),c=document.querySelector(".search-form-switch__form_tour"),r=document.querySelector(".search-form-switch__form_hotel");o&&n&&c&&r&&(e="search-form-switch__button--active",t="search-form-switch__form--active",o.addEventListener("click",function(){o.classList.add(e),c.classList.add(t),n.classList.remove(e),r.classList.remove(t)}),n.addEventListener("click",function(){n.classList.add(e),r.classList.add(t),o.classList.remove(e),c.classList.remove(t)}))}(),document.addEventListener("DOMContentLoaded",function(){var e=".CountryPage__TabsContainer--Scroll";document.querySelector(e)&&new Splide(e,{autoplay:!1,arrows:!1,pagination:!1,autoWidth:!0}).mount()}),document.addEventListener("DOMContentLoaded",function(){var e=".HotelPage__TabsContainer--Scroll";document.querySelector(e)&&new Splide(e,{autoplay:!1,arrows:!1,perMove:1,pagination:!1,autoWidth:!0}).mount()}),document.addEventListener("DOMContentLoaded",function(){var e=".HotelPage__PhotoSlider";document.querySelector(e)&&new Splide(e,{type:"loop",autoplay:!0,autoWidth:!0,perPage:5,perMove:1,pagination:!1,lazyLoad:"nearby",preloadPages:5,throttle:10,arrowPath:"M1.06039 38.9541C2.48267 40.3486 4.77972 40.3486 6.202 38.9541L22.9396 22.4452C24.3535 21.0423 24.3535 18.7767 22.9396 17.3738L6.202 0.864871C4.7552 -0.35721 2.59852 -0.275046 1.2516 1.05347C-0.0953188 2.38199 -0.178623 4.50921 1.06039 5.93624L15.209 19.9275L1.06039 33.8827C-0.353463 35.2856 -0.353463 37.5512 1.06039 38.9541Z"}).mount()}),document.addEventListener("DOMContentLoaded",function(){var e=".MobileWithYou__SplideRoot";document.querySelector(e)&&new Splide(e,{type:"loop",pagination:!1}).mount()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImIyYy1tZW51LmpzIiwiY291bnRyeS1pbmZvLWhhbmRsZXIuanMiLCJmZWVkYmFjay5qcyIsImhvdGVsLXRhYnMuanMiLCJtb2JpbGUtc2lkZWJhci5qcyIsInJoLWFjY29yZGlvbi5qcyIsInNlYXJjaC1mcm9tLXN3aXRjaC5qcyIsInNwbGlkZS1pbml0LWNvdW50cnktcGFnZS10YWJzLmpzIiwic3BsaWRlLWluaXQtaG90ZWwtcGFnZS10YWJzLmpzIiwic3BsaWRlLWluaXQtbm9tZXItcGhvdG8tc2xpZGVyLmpzIiwic3BsaWRlLWluaXQtd2l0aC15b3UuanMiXSwibmFtZXMiOlsiYjJjTWVudVRvUmlnaHRDbGFzcyIsImIyY01lbnVFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYjJjTWVudUNvbnRlbnRFbGVtZW50IiwiYjJjVHJpZ2dlckVsZW1lbnQiLCJzdHlsZSIsImFuaW1hdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkIiwicmVtb3ZlIiwiYXR0cmlidXRlTmFtZVRvUXVlcnkiLCJhdHRyaWJ1dGVOYW1lIiwiY29uY2F0IiwiaGlkZUVsZW1lbnQiLCJlbGVtZW50IiwiZGlzcGxheSIsInNob3dFbGVtZW50IiwiZGF0YVNlY3Rpb25BdHRyaWJ1dGVOYW1lIiwiZGF0YVRyaWdnZXJBdHRyaWJ1dGVOYW1lIiwiZGF0YUF0dHJpYnV0ZU5hbWUiLCJkYXRhVGl0bGVBdHRyaWJ1dGVOYW1lIiwiZ29sZEJnQ2xhc3MiLCJkYXRhcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRhU2VjdGlvbnMiLCJkYXRhVHJpZ2dlcnMiLCJkYXRhVGl0bGVzIiwiZm9yRWFjaCIsImRhdGFUaXRsZSIsImRhdGFUcmlnZ2VyIiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJmZWVkYmFjayIsImZlZWRiYWNrVHJpZ2dlcnMiLCJmZWVkYmFja1NjcmVlbmxvY2siLCJmZWVkYmFja0Nsb3NlVHJpZ2dlciIsImZlZWRiYWNrQWN0aXZlQ2xhc3MiLCJmZWVkYmFja1RyaWdnZXIiLCJob3RlbFBob3Rvc0luaXRlZCIsImRhdGFUcmlnZ2VyMiIsInNldFRpbWVvdXQiLCJub21lciIsInNwbGlkZURlc2t0b3AiLCJTcGxpZGUiLCJ0eXBlIiwiYXV0b3BsYXkiLCJwZXJQYWdlIiwicGVyTW92ZSIsImRpcmVjdGlvbiIsImhlaWdodCIsInBhZ2luYXRpb24iLCJsYXp5TG9hZCIsImFycm93UGF0aCIsIm1vdW50IiwicHJlbG9hZFBhZ2VzIiwiZ2FwIiwidGhyb3R0bGUiLCJzeW5jIiwiY2xvc2VTaWRlYmFyIiwibW9iaWxlU2lkZWJhckVsZW1lbnQiLCJtb2JpbGVTaWRlYmFyVHJpZ2dlckVsZW1lbnQiLCJtb2JpbGVTaWRlYmFyQ2xvc2VUcmlnZ2VyRWxlbWVudCIsIm1vYmlsZVNpZGViYXJTY3JlZW5sb2NrRWxlbWVudCIsIm1vYmlsZVNpZGViYXJJdGVtRWxlbWVudHMiLCJtb2JpbGVTaWRlYmFyQWN0aXZlQ2xhc3MiLCJsZW5ndGgiLCJib2R5Iiwib3ZlcmZsb3ciLCJtb2JpbGVTaWRlYmFySXRlbUVsZW1lbnQiLCJ0cmlnZ2VyIiwic3VibWVudSIsInN1Ym1lbnVFYWNoIiwiaW5uZXJXaWR0aCIsImFjY29yZGlvbkVsZW1lbnRzIiwiYWNjb3JkaW9uIiwiYnV0dG9uQWN0aXZlQ2xhc3MiLCJmb3JtQWN0aXZlQ2xhc3MiLCJ0b3VyU2VhcmNoQnV0dG9uRWxlbWVudCIsImhvdGVsU2VhcmNoQnV0dG9uRWxlbWVudCIsInRvdXJTZWFyY2hGb3JtRWxlbWVudCIsImhvdGVsU2VhcmNoRm9ybUVsZW1lbnQiLCJzbGlkZXJFbGVtZW50UXVlcnkiLCJhcnJvd3MiLCJhdXRvV2lkdGgiXSwibWFwcGluZ3MiOiJjQUFBLFdBQ0EsSUFLQUEsRUFBQSxxQkFFQUMsRUFBQUMsU0FBQUMsY0FQQSxhQVFBQyxFQUFBRixTQUFBQyxjQVBBLHNCQVFBRSxFQUFBSCxTQUFBQyxjQVBBLHVCQVNBRixHQUFBRyxHQUFB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QUEsSUFDQTlCLFVDVEF4RCxTQUFBTSxpQkFBQSxtQkFBQSxXQUNBLElBQUE4RSxFQUFBLG9DQUVBcEYsU0FBQUMsY0FBQW1GLElBQ0EsSUFBQXRDLE9BQUFzQyxFQUFBLENBQ0FwQyxVQUFBLEVBQ0FxQyxRQUFBLEVBQ0FuQyxRQUFBLEVBQ0FHLFlBQUEsRUFDQWlDLFdBQUEsSUFDQTlCLFVDVkF4RCxTQUFBTSxpQkFBQSxtQkFBQSxXQUNBLElBQUE4RSxFQUFBLDBCQUVBcEYsU0FBQUMsY0FBQW1GLElBQ0EsSUFBQXRDLE9BQUFzQyxFQUFBLENBQ0FyQyxLQUFBLE9BQ0FDLFVBQUEsRUFDQXNDLFdBQUEsRUFDQXJDLFFBQUEsRUFDQUMsUUFBQSxFQUNBRyxZQUFBLEVBQ0FDLFNBQUEsU0FDQUcsYUFBQSxFQUNBRSxTQUFBLEdBQ0FKLFVBQUEsNFVBQ0FDLFVDZkF4RCxTQUFBTSxpQkFBQSxtQkFBQSxXQUNBLElBQUE4RSxFQUFBLDZCQUVBcEYsU0FBQUMsY0FBQW1GLElBQ0EsSUFBQXRDLE9BQUFzQyxFQUFBLENBQ0FyQyxLQUFBLE9BQ0FNLFlBQUEsSUFDQUciLCJmaWxlIjoiY3VzdG9tZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoKCkgPT4ge1xyXG4gIGNvbnN0IGIyY01lbnVRdWVyeSA9IFwiLmIyYy1tZW51XCI7XHJcbiAgY29uc3QgYjJjTWVudUNvbnRlbnRRdWVyeSA9IFwiLmIyYy1tZW51X19jb250ZW50XCI7XHJcbiAgY29uc3QgYjJjVHJpZ2dlclF1ZXJ5ID0gXCIuYjJjLW1lbnVfX3RyaWdnZXJcIjtcclxuXHJcbiAgY29uc3QgYjJjTWVudUFjdGl2ZUNsYXNzID0gXCJiMmMtbWVudS0tYWN0aXZlXCI7XHJcbiAgY29uc3QgYjJjTWVudVRvUmlnaHRDbGFzcyA9IFwiYjJjLW1lbnUtLXRvLXJpZ2h0XCI7XHJcblxyXG4gIGNvbnN0IGIyY01lbnVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihiMmNNZW51UXVlcnkpO1xyXG4gIGNvbnN0IGIyY01lbnVDb250ZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYjJjTWVudUNvbnRlbnRRdWVyeSk7XHJcbiAgY29uc3QgYjJjVHJpZ2dlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGIyY1RyaWdnZXJRdWVyeSk7XHJcblxyXG4gIGlmICghYjJjTWVudUVsZW1lbnQgJiYgIWIyY01lbnVDb250ZW50RWxlbWVudCAmJiAhYjJjVHJpZ2dlckVsZW1lbnQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGIyY01lbnVDb250ZW50RWxlbWVudC5zdHlsZS5hbmltYXRpb24gPSBcIm5vbmVcIjtcclxuICBcclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgLSAyMzIgPiAwKSB7XHJcbiAgICAgIGIyY01lbnVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYjJjTWVudVRvUmlnaHRDbGFzcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiMmNNZW51RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGIyY01lbnVUb1JpZ2h0Q2xhc3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBiMmNNZW51Q29udGVudEVsZW1lbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcclxuICAgIGIyY01lbnVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoYjJjTWVudUFjdGl2ZUNsYXNzKTtcclxuICB9O1xyXG5cclxuICBiMmNUcmlnZ2VyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTWVudSk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxufSkoKTsiLCIoKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGFTZWN0aW9uVHJpZ2dlckF0dHJpYnV0ZU5hbWUgPSBcInJoLWNvdW50cnktZGF0YS1zZWN0aW9uLXRyaWdnZXJcIjtcclxuICBjb25zdCBkYXRhU2VjdGlvbkF0dHJpYnV0ZU5hbWUgPSBcInJoLWNvdW50cnktZGF0YS1zZWN0aW9uXCI7XHJcbiAgY29uc3QgZGF0YVRyaWdnZXJBdHRyaWJ1dGVOYW1lID0gXCJyaC1jb3VudHJ5LWRhdGEtdHJpZ2dlclwiO1xyXG4gIGNvbnN0IGRhdGFBdHRyaWJ1dGVOYW1lID0gXCJyaC1jb3VudHJ5LWRhdGFcIjtcclxuICBjb25zdCBkYXRhVGl0bGVBdHRyaWJ1dGVOYW1lID0gXCJyaC1jb3VudHJ5LWRhdGEtdGl0bGVcIjtcclxuICBjb25zdCBnb2xkQmdDbGFzcyA9IFwiQ291bnRyeVBhZ2VfX1RhYkxpbmstLUFjdGl2ZVwiO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZVxyXG4gICAqIEByZXR1cm5zICB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIGNvbnN0IGF0dHJpYnV0ZU5hbWVUb1F1ZXJ5ID0gYXR0cmlidXRlTmFtZSA9PiBgWyR7YXR0cmlidXRlTmFtZX1dYDtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGlkXHJcbiAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICovXHJcbiAgIGNvbnN0IGNyZWF0ZVF1ZXJ5Rm9yRGF0YUJ5SWQgPSBpZCA9PiBgWyR7ZGF0YUF0dHJpYnV0ZU5hbWV9ID0gXCIke2lkfVwiXWA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBpZFxyXG4gICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAqL1xyXG4gIGNvbnN0IGNyZWF0ZVF1ZXJ5Rm9yRGF0YVNlY3Rpb25CeUlkID0gaWQgPT4gYFske2RhdGFTZWN0aW9uQXR0cmlidXRlTmFtZX0gPSBcIiR7aWR9XCJdYDtcclxuXHJcbiAgIC8qKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyfSBpZFxyXG4gICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAqL1xyXG4gIGNvbnN0IGNyZWF0ZVF1ZXJ5Rm9yRGF0YVRpdGxlQnlJZCA9IGlkID0+IGBbJHtkYXRhVGl0bGVBdHRyaWJ1dGVOYW1lfSA9IFwiJHtpZH1cIl1gO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XHJcbiAgICogQHJldHVybnMge3ZvaWR9IFxyXG4gICAqL1xyXG4gIGNvbnN0IGhpZGVFbGVtZW50ID0gZWxlbWVudCA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XHJcbiAgICogQHJldHVybnMge3ZvaWR9IFxyXG4gICAqL1xyXG4gIGNvbnN0IHNob3dFbGVtZW50ID0gZWxlbWVudCA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGF0dHJpYnV0ZU5hbWVUb1F1ZXJ5KGRhdGFBdHRyaWJ1dGVOYW1lKSk7XHJcbiAgY29uc3QgZGF0YVNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhdHRyaWJ1dGVOYW1lVG9RdWVyeShkYXRhU2VjdGlvbkF0dHJpYnV0ZU5hbWUpKTtcclxuICBjb25zdCBkYXRhVHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGF0dHJpYnV0ZU5hbWVUb1F1ZXJ5KGRhdGFUcmlnZ2VyQXR0cmlidXRlTmFtZSkpO1xyXG4gIGNvbnN0IGRhdGFUaXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGF0dHJpYnV0ZU5hbWVUb1F1ZXJ5KGRhdGFUaXRsZUF0dHJpYnV0ZU5hbWUpKTtcclxuXHJcbiAgZGF0YXMuZm9yRWFjaChkYXRhID0+IGhpZGVFbGVtZW50KGRhdGEpKTtcclxuICBkYXRhU2VjdGlvbnMuZm9yRWFjaChkYXRhU2VjdGlvbiA9PiBoaWRlRWxlbWVudChkYXRhU2VjdGlvbikpO1xyXG4gIGRhdGFUaXRsZXMuZm9yRWFjaChkYXRhVGl0bGUgPT4gZGF0YVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoZ29sZEJnQ2xhc3MpKTtcclxuXHJcbiAgZGF0YVRyaWdnZXJzLmZvckVhY2goZGF0YVRyaWdnZXIgPT4ge1xyXG4gICAgZGF0YVRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZGF0YXMuZm9yRWFjaChkYXRhID0+IGhpZGVFbGVtZW50KGRhdGEpKTtcclxuICAgICAgZGF0YVNlY3Rpb25zLmZvckVhY2goZGF0YVNlY3Rpb24gPT4gaGlkZUVsZW1lbnQoZGF0YVNlY3Rpb24pKTtcclxuICAgICAgZGF0YVRpdGxlcy5mb3JFYWNoKGRhdGFUaXRsZSA9PiBkYXRhVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShnb2xkQmdDbGFzcykpO1xyXG5cclxuICAgICAgc2hvd0VsZW1lbnQoXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIGNyZWF0ZVF1ZXJ5Rm9yRGF0YUJ5SWQoZGF0YVRyaWdnZXIuZ2V0QXR0cmlidXRlKGRhdGFUcmlnZ2VyQXR0cmlidXRlTmFtZSkpXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICBzaG93RWxlbWVudChcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNyZWF0ZVF1ZXJ5Rm9yRGF0YVNlY3Rpb25CeUlkKFxyXG4gICAgICAgICAgZGF0YVRyaWdnZXIuZ2V0QXR0cmlidXRlKGRhdGFTZWN0aW9uVHJpZ2dlckF0dHJpYnV0ZU5hbWUpXHJcbiAgICAgICAgKSlcclxuICAgICAgKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjcmVhdGVRdWVyeUZvckRhdGFUaXRsZUJ5SWQoXHJcbiAgICAgICAgZGF0YVRyaWdnZXIuZ2V0QXR0cmlidXRlKGRhdGFUcmlnZ2VyQXR0cmlidXRlTmFtZSlcclxuICAgICAgKSkuZm9yRWFjaChkYXRhVGl0bGUgPT4gZGF0YVRpdGxlLmNsYXNzTGlzdC5hZGQoZ29sZEJnQ2xhc3MpKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KSgpOyIsIigoKSA9PiB7XG4gIGNvbnN0IGZlZWRiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5GZWVkYmFja1wiKTtcbiAgY29uc3QgZmVlZGJhY2tUcmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuRmVlZGJhY2tfX1RyaWdnZXJcIik7XG4gIGNvbnN0IGZlZWRiYWNrU2NyZWVubG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuRmVlZGJhY2tfX1NjcmVlbmxvY2tcIik7XG4gIGNvbnN0IGZlZWRiYWNrQ2xvc2VUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5GZWVkYmFja19fQ2xvc2VUcmlnZ2VyXCIpO1xuXG4gIGNvbnN0IGZlZWRiYWNrQWN0aXZlQ2xhc3MgPSBcIkZlZWRiYWNrLS1BY3RpdmVcIjtcblxuICBpZiAoIWZlZWRiYWNrIHx8ICFmZWVkYmFja1RyaWdnZXJzIHx8ICFmZWVkYmFja1NjcmVlbmxvY2sgfHwgIWZlZWRiYWNrQ2xvc2VUcmlnZ2VyKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZmVlZGJhY2tUcmlnZ2Vycy5mb3JFYWNoKGZlZWRiYWNrVHJpZ2dlciA9PiB7XG4gICAgZmVlZGJhY2tUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBmZWVkYmFjay5jbGFzc0xpc3QuYWRkKGZlZWRiYWNrQWN0aXZlQ2xhc3MpO1xuICAgIH0pO1xuICB9KTtcblxuICBmZWVkYmFja1NjcmVlbmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBmZWVkYmFjay5jbGFzc0xpc3QucmVtb3ZlKGZlZWRiYWNrQWN0aXZlQ2xhc3MpO1xuICB9KTtcblxuICBmZWVkYmFja0Nsb3NlVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoZmVlZGJhY2tBY3RpdmVDbGFzcyk7XG4gIH0pO1xufSkoKTtcbiIsIigoKSA9PiB7XG4gIGNvbnN0IGRhdGFUcmlnZ2VyQXR0cmlidXRlTmFtZSA9IFwiaG90ZWwtdGFiLXRyaWdnZXItaW5kZXhcIjtcbiAgY29uc3QgZGF0YUF0dHJpYnV0ZU5hbWUgPSBcImhvdGVsLWRhdGFcIjtcbiAgY29uc3QgZ29sZEJnQ2xhc3MgPSBcIkhvdGVsUGFnZV9fVGFiTGluay0tQWN0aXZlXCI7XG4gIFxuICBjb25zdCBhdHRyaWJ1dGVOYW1lVG9RdWVyeSA9IGF0dHJpYnV0ZU5hbWUgPT4gYFske2F0dHJpYnV0ZU5hbWV9XWA7XG4gIGNvbnN0IGNyZWF0ZVF1ZXJ5Rm9yRGF0YUJ5SWQgPSBpZCA9PiBgWyR7ZGF0YUF0dHJpYnV0ZU5hbWV9ID0gXCIke2lkfVwiXWA7XG4gIGNvbnN0IGhpZGVFbGVtZW50ID0gZWxlbWVudCA9PiB7IGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyB9O1xuICBjb25zdCBzaG93RWxlbWVudCA9IGVsZW1lbnQgPT4geyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IH07XG4gIFxuICBsZXQgaG90ZWxQaG90b3NJbml0ZWQgPSBmYWxzZTtcblxuICBjb25zdCBpbml0U2xpZGVycyA9ICgpID0+IHtcbiAgICBob3RlbFBob3Rvc0luaXRlZCA9IHRydWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IG5vbWVyRWxlbWVudFF1ZXJ5ID0gXCIuSG90ZWxQYWdlX19Ob21lclwiO1xuICAgICAgXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG5vbWVyRWxlbWVudFF1ZXJ5KS5mb3JFYWNoKG5vbWVyID0+IHtcbiAgICAgICAgY29uc3Qgc2xpZGVyRGVza3RvcEVsZW1lbnRRdWVyeSA9IFwiLkhvdGVsUGFnZV9fTm9tZXJQaG90b1NsaWRlclwiO1xuICAgICAgICBjb25zdCBzbGlkZXJNb2JpbGVFbGVtZW50UXVlcnkgPSBcIi5Ib3RlbFBhZ2VfX05vbWVyTW9iaWxlUGhvdG9TbGlkZXJcIjtcblxuICAgICAgICBjb25zdCBzcGxpZGVEZXNrdG9wID0gbmV3IFNwbGlkZShub21lci5xdWVyeVNlbGVjdG9yKHNsaWRlckRlc2t0b3BFbGVtZW50UXVlcnkpLCB7XG4gICAgICAgICAgdHlwZTogXCJsb29wXCIsXG4gICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgcGVyUGFnZTogMyxcbiAgICAgICAgICBwZXJNb3ZlOiAxLFxuICAgICAgICAgIGRpcmVjdGlvbjogXCJ0dGJcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiNjc1cHhcIixcbiAgICAgICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICAgICAgICBsYXp5TG9hZDogXCJuZWFyYnlcIixcbiAgICAgICAgICBhcnJvd1BhdGg6IFwiTTIuMDE2MiAzOS45NTQxQzMuMzc5MjMgNDEuMzQ4NiA1LjU4MDU2IDQxLjM0ODYgNi45NDM1OSAzOS45NTQxTDIyLjk4MzggMjMuNDQ1MkMyNC4zMzg3IDIyLjA0MjMgMjQuMzM4NyAxOS43NzY3IDIyLjk4MzggMTguMzczOEw2Ljk0MzU5IDEuODY0ODdDNS41NTcwNyAwLjY0Mjc5IDMuNDkwMjUgMC43MjQ5NTQgMi4xOTk0NSAyLjA1MzQ3QzAuOTA4NjU0IDMuMzgxOTkgMC44Mjg4MjEgNS41MDkyMSAyLjAxNjIgNi45MzYyNEwxNS41NzUyIDIwLjkyNzVMMi4wMTYyIDM0Ljg4MjdDMC42NjEyNjYgMzYuMjg1NiAwLjY2MTI2NiAzOC41NTEyIDIuMDE2MiAzOS45NTQxWlwiXG4gICAgICAgIH0pLm1vdW50KCk7XG5cbiAgICAgICAgY29uc3Qgc2xpZGVyTW9iaWxlID0gbmV3IFNwbGlkZShub21lci5xdWVyeVNlbGVjdG9yKHNsaWRlck1vYmlsZUVsZW1lbnRRdWVyeSksIHtcbiAgICAgICAgICB0eXBlOiBcImxvb3BcIixcbiAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICBwZXJQYWdlOiAxLFxuICAgICAgICAgIHBlck1vdmU6IDEsXG4gICAgICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXG4gICAgICAgICAgbGF6eUxvYWQ6IFwibmVhcmJ5XCIsXG4gICAgICAgICAgcHJlbG9hZFBhZ2VzOiAzLFxuICAgICAgICAgIGdhcDogXCIyZW1cIixcbiAgICAgICAgICB0aHJvdHRsZTogMTAsXG4gICAgICAgICAgYXJyb3dQYXRoOiBcIk0xLjA2MDM5IDM4Ljk1NDFDMi40ODI2NyA0MC4zNDg2IDQuNzc5NzIgNDAuMzQ4NiA2LjIwMiAzOC45NTQxTDIyLjkzOTYgMjIuNDQ1MkMyNC4zNTM1IDIxLjA0MjMgMjQuMzUzNSAxOC43NzY3IDIyLjkzOTYgMTcuMzczOEw2LjIwMiAwLjg2NDg3MUM0Ljc1NTIgLTAuMzU3MjEgMi41OTg1MiAtMC4yNzUwNDYgMS4yNTE2IDEuMDUzNDdDLTAuMDk1MzE4OCAyLjM4MTk5IC0wLjE3ODYyMyA0LjUwOTIxIDEuMDYwMzkgNS45MzYyNEwxNS4yMDkgMTkuOTI3NUwxLjA2MDM5IDMzLjg4MjdDLTAuMzUzNDYzIDM1LjI4NTYgLTAuMzUzNDYzIDM3LjU1MTIgMS4wNjAzOSAzOC45NTQxWlwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlck1vYmlsZS5zeW5jKHNwbGlkZURlc2t0b3ApLm1vdW50KCk7XG4gICAgICB9KTtcbiAgICB9LCAxMDApO1xuICB9O1xuXG4gIGNvbnN0IGRhdGFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhdHRyaWJ1dGVOYW1lVG9RdWVyeShkYXRhQXR0cmlidXRlTmFtZSkpO1xuICBjb25zdCBkYXRhVHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGF0dHJpYnV0ZU5hbWVUb1F1ZXJ5KGRhdGFUcmlnZ2VyQXR0cmlidXRlTmFtZSkpO1xuXG4gIGRhdGFzLmZvckVhY2goZGF0YSA9PiBoaWRlRWxlbWVudChkYXRhKSk7XG5cbiAgZGF0YVRyaWdnZXJzLmZvckVhY2goZGF0YVRyaWdnZXIgPT4ge1xuICAgIGRhdGFUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkYXRhcy5mb3JFYWNoKGRhdGEgPT4gaGlkZUVsZW1lbnQoZGF0YSkpO1xuXG4gICAgICBkYXRhVHJpZ2dlcnMuZm9yRWFjaChkYXRhVHJpZ2dlcjIgPT4ge1xuICAgICAgICBkYXRhVHJpZ2dlcjIuY2xhc3NMaXN0LnJlbW92ZShnb2xkQmdDbGFzcyk7XG4gICAgICB9KTtcblxuICAgICAgZGF0YVRyaWdnZXIuY2xhc3NMaXN0LmFkZChnb2xkQmdDbGFzcyk7XG5cbiAgICAgIHNob3dFbGVtZW50KFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGNyZWF0ZVF1ZXJ5Rm9yRGF0YUJ5SWQoZGF0YVRyaWdnZXIuZ2V0QXR0cmlidXRlKGRhdGFUcmlnZ2VyQXR0cmlidXRlTmFtZSkpXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIGlmIChkYXRhVHJpZ2dlci5nZXRBdHRyaWJ1dGUoZGF0YVRyaWdnZXJBdHRyaWJ1dGVOYW1lKSA9PT0gXCI2XCIgJiYgIWhvdGVsUGhvdG9zSW5pdGVkKSB7XG4gICAgICAgIGluaXRTbGlkZXJzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSkoKTsiLCIoKCkgPT4ge1xyXG4gIGNvbnN0IG1vYmlsZVNpZGViYXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtc2lkZWJhclwiKTtcclxuICBjb25zdCBtb2JpbGVTaWRlYmFyVHJpZ2dlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1zaWRlYmFyLXRyaWdnZXJcIik7XHJcbiAgY29uc3QgbW9iaWxlU2lkZWJhckNsb3NlVHJpZ2dlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1zaWRlYmFyX19jbG9zZS10cmlnZ2VyXCIpO1xyXG4gIGNvbnN0IG1vYmlsZVNpZGViYXJTY3JlZW5sb2NrRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLXNpZGViYXJfX3NjcmVlbmxvY2tcIik7XHJcbiAgY29uc3QgbW9iaWxlU2lkZWJhckl0ZW1FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9iaWxlLXNpZGViYXJfX2l0ZW1cIik7XHJcblxyXG4gIGNvbnN0IG1vYmlsZVNpZGViYXJBY3RpdmVDbGFzcyA9IFwibW9iaWxlLXNpZGViYXItLWFjdGl2ZVwiO1xyXG5cclxuICBpZiAoXHJcbiAgICAhbW9iaWxlU2lkZWJhckVsZW1lbnQgXHJcbiAgICB8fCAhbW9iaWxlU2lkZWJhclRyaWdnZXJFbGVtZW50IFxyXG4gICAgfHwgIW1vYmlsZVNpZGViYXJDbG9zZVRyaWdnZXJFbGVtZW50IFxyXG4gICAgfHwgIW1vYmlsZVNpZGViYXJTY3JlZW5sb2NrRWxlbWVudFxyXG4gICAgfHwgbW9iaWxlU2lkZWJhckl0ZW1FbGVtZW50cy5sZW5ndGggPT09IDAgXHJcbiAgKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGVuU2lkZWJhciA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgbW9iaWxlU2lkZWJhckVsZW1lbnQuY2xhc3NMaXN0LmFkZChtb2JpbGVTaWRlYmFyQWN0aXZlQ2xhc3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlU2lkZWJhciA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgIG1vYmlsZVNpZGViYXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobW9iaWxlU2lkZWJhckFjdGl2ZUNsYXNzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtb2JpbGVXaWR0aExpbWl0ID0gNzY5O1xyXG4gICAgXHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gbW9iaWxlV2lkdGhMaW1pdCkge1xyXG4gICAgICBjbG9zZVNpZGViYXIoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBtb2JpbGVTaWRlYmFySXRlbUVsZW1lbnRzLmZvckVhY2gobW9iaWxlU2lkZWJhckl0ZW1FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IHRyaWdnZXIgPSBtb2JpbGVTaWRlYmFySXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtc2lkZWJhcl9fc3VibWVudS10cmlnZ2VyXCIpO1xyXG4gICAgY29uc3Qgc3VibWVudSA9IG1vYmlsZVNpZGViYXJJdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1zaWRlYmFyX19zdWJtZW51XCIpO1xyXG4gICAgXHJcbiAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9iaWxlLXNpZGViYXJfX3N1Ym1lbnVcIilcclxuICAgICAgICAuZm9yRWFjaChzdWJtZW51RWFjaCA9PiB7XHJcbiAgICAgICAgICBpZiAoc3VibWVudUVhY2ggIT09IHN1Ym1lbnUpIHtcclxuICAgICAgICAgICAgc3VibWVudUVhY2guY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZS1zaWRlYmFyX19zdWJtZW51LS1hY3RpdmVcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHN1Ym1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm1vYmlsZS1zaWRlYmFyX19zdWJtZW51LS1hY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICBtb2JpbGVTaWRlYmFyVHJpZ2dlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5TaWRlYmFyKTtcclxuICBtb2JpbGVTaWRlYmFyQ2xvc2VUcmlnZ2VyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VTaWRlYmFyKTtcclxuICBtb2JpbGVTaWRlYmFyU2NyZWVubG9ja0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlU2lkZWJhcik7XHJcbn0pKCk7XHJcblxyXG5cclxuKCgpID0+IHtcclxuICBjb25zdCBtb2JpbGVTaWRlYmFyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuTW9iaWxlU2lkZWJhclwiKTtcclxuICBjb25zdCBtb2JpbGVTaWRlYmFyVHJpZ2dlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1zaWRlYmFyLXRyaWdnZXJcIik7XHJcbiAgY29uc3QgbW9iaWxlU2lkZWJhckNsb3NlVHJpZ2dlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk1vYmlsZVNpZGViYXJfX0Nsb3NlVHJpZ2dlclwiKTtcclxuICBjb25zdCBtb2JpbGVTaWRlYmFyU2NyZWVubG9ja0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk1vYmlsZVNpZGViYXJfX1NjcmVlbkxvY2tcIik7XHJcbiAgY29uc3QgbW9iaWxlU2lkZWJhckl0ZW1FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuTW9iaWxlU2lkZWJhcl9fU2Vjb25kQ29udGVudEl0ZW1cIik7XHJcblxyXG4gIGNvbnN0IG1vYmlsZVNpZGViYXJBY3RpdmVDbGFzcyA9IFwiTW9iaWxlU2lkZWJhci0tQWN0aXZlXCI7XHJcblxyXG4gIGlmIChcclxuICAgICFtb2JpbGVTaWRlYmFyRWxlbWVudCBcclxuICAgIHx8ICFtb2JpbGVTaWRlYmFyVHJpZ2dlckVsZW1lbnQgXHJcbiAgICB8fCAhbW9iaWxlU2lkZWJhckNsb3NlVHJpZ2dlckVsZW1lbnQgXHJcbiAgICB8fCAhbW9iaWxlU2lkZWJhclNjcmVlbmxvY2tFbGVtZW50XHJcbiAgICB8fCBtb2JpbGVTaWRlYmFySXRlbUVsZW1lbnRzLmxlbmd0aCA9PT0gMCBcclxuICApIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9wZW5TaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICBtb2JpbGVTaWRlYmFyRWxlbWVudC5jbGFzc0xpc3QuYWRkKG1vYmlsZVNpZGViYXJBY3RpdmVDbGFzcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgbW9iaWxlU2lkZWJhckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShtb2JpbGVTaWRlYmFyQWN0aXZlQ2xhc3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1vYmlsZVdpZHRoTGltaXQgPSA3Njk7XHJcbiAgICBcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSBtb2JpbGVXaWR0aExpbWl0KSB7XHJcbiAgICAgIGNsb3NlU2lkZWJhcigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG1vYmlsZVNpZGViYXJJdGVtRWxlbWVudHMuZm9yRWFjaChtb2JpbGVTaWRlYmFySXRlbUVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IG1vYmlsZVNpZGViYXJJdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLk1vYmlsZVNpZGViYXJfX1NlY29uZENvbnRlbnRTdWJtZW51VHJpZ2dlclwiKTtcclxuICAgIGNvbnN0IHN1Ym1lbnUgPSBtb2JpbGVTaWRlYmFySXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5Nb2JpbGVTaWRlYmFyX19TZWNvbmRDb250ZW50U3VibWVudVwiKTtcclxuICAgIFxyXG4gICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLk1vYmlsZVNpZGViYXJfX1NlY29uZENvbnRlbnRTdWJtZW51XCIpXHJcbiAgICAgICAgLmZvckVhY2goc3VibWVudUVhY2ggPT4ge1xyXG4gICAgICAgICAgaWYgKHN1Ym1lbnVFYWNoICE9PSBzdWJtZW51KSB7XHJcbiAgICAgICAgICAgIHN1Ym1lbnVFYWNoLmNsYXNzTGlzdC5yZW1vdmUoXCJNb2JpbGVTaWRlYmFyX19TZWNvbmRDb250ZW50U3VibWVudS0tQWN0aXZlXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICBzdWJtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJNb2JpbGVTaWRlYmFyX19TZWNvbmRDb250ZW50U3VibWVudS0tQWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgbW9iaWxlU2lkZWJhclRyaWdnZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuU2lkZWJhcik7XHJcbiAgbW9iaWxlU2lkZWJhckNsb3NlVHJpZ2dlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlU2lkZWJhcik7XHJcbiAgbW9iaWxlU2lkZWJhclNjcmVlbmxvY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVNpZGViYXIpO1xyXG59KSgpO1xyXG4iLCIoKCkgPT4ge1xyXG4gIGNvbnN0IGFjY29yZGlvblF1ZXJ5ID0gXCIucmgtYWNjb3JkaW9uXCI7XHJcbiAgY29uc3QgYWNjb3JkaW9uVHJpZ2dlclF1ZXJ5ID0gXCIucmgtYWNjb3JkaW9uX190cmlnZ2VyXCI7XHJcbiAgY29uc3QgYWNjb3JkaW9uQWN0aXZlQ2xhc3MgPSBcInJoLWFjY29yZGlvbi0tYWN0aXZlXCI7XHJcblxyXG4gIGNvbnN0IGFjY29yZGlvbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhY2NvcmRpb25RdWVyeSk7XHJcblxyXG4gIGlmICghYWNjb3JkaW9uRWxlbWVudHMpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGFjY29yZGlvbkVsZW1lbnRzLmZvckVhY2goYWNjb3JkaW9uID0+IHtcclxuICAgIGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yKGFjY29yZGlvblRyaWdnZXJRdWVyeSkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgYWNjb3JkaW9uLmNsYXNzTGlzdC50b2dnbGUoYWNjb3JkaW9uQWN0aXZlQ2xhc3MpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcblxyXG4oKCkgPT4ge1xyXG4gIGNvbnN0IGFjY29yZGlvblF1ZXJ5ID0gXCIuUkhBY2NvcmRpb25cIjtcclxuICBjb25zdCBhY2NvcmRpb25UcmlnZ2VyUXVlcnkgPSBcIi5SSEFjY29yZGlvbl9fVHJpZ2dlclwiO1xyXG4gIGNvbnN0IGFjY29yZGlvbkFjdGl2ZUNsYXNzID0gXCJSSEFjY29yZGlvbi0tQWN0aXZlXCI7XHJcblxyXG4gIGNvbnN0IGFjY29yZGlvbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhY2NvcmRpb25RdWVyeSk7XHJcblxyXG4gIGlmICghYWNjb3JkaW9uRWxlbWVudHMpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGFjY29yZGlvbkVsZW1lbnRzLmZvckVhY2goYWNjb3JkaW9uID0+IHtcclxuICAgIGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yKGFjY29yZGlvblRyaWdnZXJRdWVyeSkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgYWNjb3JkaW9uLmNsYXNzTGlzdC50b2dnbGUoYWNjb3JkaW9uQWN0aXZlQ2xhc3MpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiIsIigoKSA9PiB7XHJcbiAgY29uc3QgdG91clNlYXJjaEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1mb3JtLXN3aXRjaF9fYnV0dG9uX3RvdXJcIik7XHJcbiAgY29uc3QgaG90ZWxTZWFyY2hCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtZm9ybS1zd2l0Y2hfX2J1dHRvbl9ob3RlbFwiKTtcclxuICBjb25zdCB0b3VyU2VhcmNoRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1mb3JtLXN3aXRjaF9fZm9ybV90b3VyXCIpO1xyXG4gIGNvbnN0IGhvdGVsU2VhcmNoRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1mb3JtLXN3aXRjaF9fZm9ybV9ob3RlbFwiKTtcclxuXHJcbiAgaWYgKFxyXG4gICAgIXRvdXJTZWFyY2hCdXR0b25FbGVtZW50IFxyXG4gICAgfHwgIWhvdGVsU2VhcmNoQnV0dG9uRWxlbWVudFxyXG4gICAgfHwgIXRvdXJTZWFyY2hGb3JtRWxlbWVudFxyXG4gICAgfHwgIWhvdGVsU2VhcmNoRm9ybUVsZW1lbnRcclxuICApIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJ1dHRvbkFjdGl2ZUNsYXNzID0gXCJzZWFyY2gtZm9ybS1zd2l0Y2hfX2J1dHRvbi0tYWN0aXZlXCI7XHJcbiAgY29uc3QgZm9ybUFjdGl2ZUNsYXNzID0gXCJzZWFyY2gtZm9ybS1zd2l0Y2hfX2Zvcm0tLWFjdGl2ZVwiO1xyXG5cclxuICB0b3VyU2VhcmNoQnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgdG91clNlYXJjaEJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChidXR0b25BY3RpdmVDbGFzcyk7XHJcbiAgICB0b3VyU2VhcmNoRm9ybUVsZW1lbnQuY2xhc3NMaXN0LmFkZChmb3JtQWN0aXZlQ2xhc3MpO1xyXG4gICAgaG90ZWxTZWFyY2hCdXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYnV0dG9uQWN0aXZlQ2xhc3MpO1xyXG4gICAgaG90ZWxTZWFyY2hGb3JtRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGZvcm1BY3RpdmVDbGFzcyk7XHJcbiAgfSk7XHJcblxyXG4gIGhvdGVsU2VhcmNoQnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaG90ZWxTZWFyY2hCdXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoYnV0dG9uQWN0aXZlQ2xhc3MpO1xyXG4gICAgaG90ZWxTZWFyY2hGb3JtRWxlbWVudC5jbGFzc0xpc3QuYWRkKGZvcm1BY3RpdmVDbGFzcyk7XHJcbiAgICB0b3VyU2VhcmNoQnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJ1dHRvbkFjdGl2ZUNsYXNzKTtcclxuICAgIHRvdXJTZWFyY2hGb3JtRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGZvcm1BY3RpdmVDbGFzcyk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3Qgc2xpZGVyRWxlbWVudFF1ZXJ5ID0gXCIuQ291bnRyeVBhZ2VfX1RhYnNDb250YWluZXItLVNjcm9sbFwiO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlckVsZW1lbnRRdWVyeSkpIHtcbiAgICBuZXcgU3BsaWRlKHNsaWRlckVsZW1lbnRRdWVyeSwge1xuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgYXV0b1dpZHRoOiB0cnVlLFxuICAgIH0pLm1vdW50KCk7XG4gIH1cbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBzbGlkZXJFbGVtZW50UXVlcnkgPSBcIi5Ib3RlbFBhZ2VfX1RhYnNDb250YWluZXItLVNjcm9sbFwiO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlckVsZW1lbnRRdWVyeSkpIHtcbiAgICBuZXcgU3BsaWRlKHNsaWRlckVsZW1lbnRRdWVyeSwge1xuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIHBlck1vdmU6IDEsXG4gICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcbiAgICB9KS5tb3VudCgpO1xuICB9XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3Qgc2xpZGVyRWxlbWVudFF1ZXJ5ID0gXCIuSG90ZWxQYWdlX19QaG90b1NsaWRlclwiO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlckVsZW1lbnRRdWVyeSkpIHtcbiAgICBjb25zdCBzcGxpZGUgPSBuZXcgU3BsaWRlKHNsaWRlckVsZW1lbnRRdWVyeSwge1xuICAgICAgdHlwZTogXCJsb29wXCIsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcbiAgICAgIHBlclBhZ2U6IDUsXG4gICAgICBwZXJNb3ZlOiAxLFxuICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXG4gICAgICBsYXp5TG9hZDogXCJuZWFyYnlcIixcbiAgICAgIHByZWxvYWRQYWdlczogNSxcbiAgICAgIHRocm90dGxlOiAxMCxcbiAgICAgIGFycm93UGF0aDogXCJNMS4wNjAzOSAzOC45NTQxQzIuNDgyNjcgNDAuMzQ4NiA0Ljc3OTcyIDQwLjM0ODYgNi4yMDIgMzguOTU0MUwyMi45Mzk2IDIyLjQ0NTJDMjQuMzUzNSAyMS4wNDIzIDI0LjM1MzUgMTguNzc2NyAyMi45Mzk2IDE3LjM3MzhMNi4yMDIgMC44NjQ4NzFDNC43NTUyIC0wLjM1NzIxIDIuNTk4NTIgLTAuMjc1MDQ2IDEuMjUxNiAxLjA1MzQ3Qy0wLjA5NTMxODggMi4zODE5OSAtMC4xNzg2MjMgNC41MDkyMSAxLjA2MDM5IDUuOTM2MjRMMTUuMjA5IDE5LjkyNzVMMS4wNjAzOSAzMy44ODI3Qy0wLjM1MzQ2MyAzNS4yODU2IC0wLjM1MzQ2MyAzNy41NTEyIDEuMDYwMzkgMzguOTU0MVpcIlxuICAgIH0pLm1vdW50KCk7XG4gIH1cbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBzbGlkZXJFbGVtZW50UXVlcnkgPSBcIi5Nb2JpbGVXaXRoWW91X19TcGxpZGVSb290XCI7XG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2xpZGVyRWxlbWVudFF1ZXJ5KSkge1xuICAgIG5ldyBTcGxpZGUoc2xpZGVyRWxlbWVudFF1ZXJ5LCB7XG4gICAgICB0eXBlOiBcImxvb3BcIixcbiAgICAgIHBhZ2luYXRpb246IGZhbHNlXG4gICAgfSkubW91bnQoKTtcbiAgfVxufSk7XG4iXX0=
