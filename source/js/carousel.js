const swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 10,
  
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
    
        600: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        },
      }
  });