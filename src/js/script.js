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

let swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    slidesPerGroup :2,
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

  let cart = []; 


async function getProducts() {
    try {
        const response = await fetch("http://localhost:3001/Products");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const datas = await response.json();
        console.log(datas);

        let card = document.querySelector(".product-card");
        console.log(card);

        if (card) {
            datas.forEach((property) => {
                card.innerHTML += `<div class="widhter" data-id="${property.id}">
                    <div class="product-image-container">
                        <div class="img-cont">
                            <div class="heighter">
                                <img src="${property.mainImage}" alt="" class="main-image">
                            </div>
                            <img src="${property.hoverImage}" alt="" class="hover-image">
                        </div>
                        <div class="icon-box">
                            <i class="fa fa-search"></i>  
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="discount-badge">${property.discountBadge}</div>
                    </div>
                    <div class="product-info">
                        <div class="color-options">
                            <span class="color black"></span>
                            <span class="color white"></span>
                            <span class="color beige"></span>
                        </div>
                        <h2>${property.name}</h2>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="price">
                            <span class="discounted-price">${property.price}</span>
                        </div>
                        <button class="add-to-cart" data-id="${property.id}">Select options</button>
                    </div>
                </div>`;
            });

            
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = this.getAttribute('data-id');
                    addToCart(productId);
                });
            });
        } else {
            console.error("Element with class 'product-card' not found.");
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

getProducts();























function addToCart(productId) {
    fetch("http://localhost:3001/Products")
        .then(response => response.json())
        .then(datas => {
            const product = datas.find(p => p.id == productId);
            if (product) {
                cart.push(product); 
                updateSidebar(); 
            }
        })
        .catch(error => console.error('Fetch error:', error));
}

function updateSidebar() {
    const sidebarContent = document.querySelector('.sidebar-content');
    sidebarContent.innerHTML = '';

    cart.forEach((product, index) => {
        sidebarContent.innerHTML += `
            <div class="cart-item" data-index="${index}">
                <img src="${product.mainImage}" alt="${product.name}">
                <div class="cart-item-info">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
                <span class="delete-icon" data-index="${index}">&times;</span>
            </div>
        `;
    });

    document.getElementById('sidebar').style.width = '300px'; 
    document.getElementById('overlay').style.display = 'block';

    document.querySelectorAll('.delete-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            removeFromCart(index);
        });
    });
}

function removeFromCart(index) {
    cart.splice(index, 1); 
    updateSidebar();
}

document.getElementById('closeSidebarBtn').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '0';
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '0';
    document.getElementById('overlay').style.display = 'none';
});

