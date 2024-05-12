// Галерея и лайтбоксы от Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import mobileNav from "./modules/mobile-nav";
import smoothScroll from "./modules/scroll.js";
smoothScroll();
mobileNav();

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// Работа с табами
const tabBtn = document.querySelectorAll(".tab__btn"),
  tabsContent = document.querySelectorAll(".content");

tabBtn.forEach((tab) =>
  tab.addEventListener("click", (event) => {
    const currentBtn = event.target.getAttribute("data-tab");
    tabBtn.forEach((item) => item.classList.remove("active-tab"));
    tabsContent.forEach((item) => item.classList.add("hiden-tab-content"));

    tab.classList.add("active-tab");
    document.getElementById(currentBtn).classList.remove("hiden-tab-content");
  })
);

document.querySelector('[data-tab="tab-1"]').classList.add("active-tab");
document.querySelector("#tab-1").classList.remove("hiden-tab-content");

// Swiper
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  modules: [Pagination],
  // Optional parameters
  slidesPerView: 3,
  // spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },

    640: {
      slidesPerView: 3,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
  },
});

// https://michalsnik.github.io/aos/
AOS.init({
  // Global settings:
  disable: "default", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
