var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerslide: 'true',
  Fade:'true',
  gragCursor: 'true',
 
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});
