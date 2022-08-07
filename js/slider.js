'use strict';
new Swiper('.slider-section', {
   simulateTouch: true,
   touchRatio: 0.7,
   grabCursor: true,
   slideToClikedSwipe: true,
   slidesPerView: 4,
   loop: true,
   slidesPerGroup: 1,
   // Навигация
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   // Управление с помощью клавиатуры
   keyboard: {
      enabled: true,
      onlyOnViewport: true,
      pageUpDown: true,
   },
   // Авто Проигрывание
   autoplay: {
      delay: 2000,
      disableOnInteraction: false,
   },
   speed: 1000,
   // Адаптивность
   breakpoints: {
      1300: {
         slidesPerView: 5,
      },
      1200: {
         slidesPerView: 4,
      },
      768: {
         slidesPerView: 3,
      },
      620: {
         slidesPerView: 2,
      },
      320: {
         slidesPerView: 1,
      },
   },
});
