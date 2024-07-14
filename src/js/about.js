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



let swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    slidesPerGroup :3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    let windowWidth = window.innerWidth;
    let direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }