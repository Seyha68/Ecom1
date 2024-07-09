
// SWIPER 
var swiperCategories = new Swiper(".categories__container", {
    spaceBetween:24,
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // var swiper = new Swiper(".mySwiper", {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        },
     
  });