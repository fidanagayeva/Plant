document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('openSidebarBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const overlay = document.getElementById('overlay');

    openSidebarBtn.addEventListener('click', function() {
        sidebar.style.width = '300px';
        overlay.style.display = 'block';
    });

    closeSidebarBtn.addEventListener('click', function() {
        sidebar.style.width = '0';
        overlay.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === overlay) {
            sidebar.style.width = '0';
            overlay.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".cardSlider", {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      breakpoints: {
          1400: {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          992: {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          576: {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          350: {
              slidesPerView: 1,
              spaceBetween: 2,
          },
      },
  });
});