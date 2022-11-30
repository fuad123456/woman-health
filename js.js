const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 4000,
  },

  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 0,
  loopedSlides: 5,
  // loopedSlides:3,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
const swiper1 = document.querySelector(".swiper").swiper;
