// ----------------- //
// --- Swiper JS --- //
// ----------------- //
const swiper = new Swiper('.slideshow-container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      SlidesPerView: 1
    },
    620: {
      SlidesPerView: 2
    },
    1024: {
      SlidesPerView: 3
    }
  }
});
