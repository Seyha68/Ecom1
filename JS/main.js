
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


  // 

  var swiperProducts = new Swiper(".new__container", {
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
          641: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          76: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        },
     
  });
  // Product 
  const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');

  tabs.forEach((tab) => {
    tab.addEventListener('click',() =>{
      const target = document.querySelector(tab.dataset.target);
      tabContents.forEach((tabContent)=>{
        tabContent.classList.remove('active-tab');
      });
      target.classList.add('active-tab');
    });
  });

