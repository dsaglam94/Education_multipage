let navBar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').addEventListener('click', () => {
    navBar.classList.add('active');
})

document.querySelector('#close-navbar').addEventListener('click', () => {
    navBar.classList.remove('active');
})

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');


registerBtn.addEventListener('click', () => {
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');

    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
});

loginBtn.addEventListener('click', () => {
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');

    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
});

let accountForm = document.querySelector('.account-form');

document.querySelector('#account-btn').addEventListener('click', () => {
    accountForm.classList.add('active');
})

document.querySelector('#close-form').addEventListener('click', () => {
    accountForm.classList.remove('active');
})

let swiperHome = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    grabCursor: true
  });

  let swiperCourses = new Swiper(".home-courses-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });

  let swiperTeachers = new Swiper(".teachers-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });

  let swiperReviews = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });

  let swiperLogo = new Swiper(".logo-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
          },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
          },
      },
  });

let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco => {
    acco.addEventListener('click', () => {
        if ( acco.classList.contains('active') ) {
            acco.classList.remove('active');
        } else {
            acco.classList.add('active');
        }
    });
});

document.querySelector('.load-more .btn').addEventListener('click', () => {
    document.querySelectorAll('.courses .box-container .hide').forEach (show => {
        show.style.display = 'block';
    });
    document.querySelector('.load-more .btn').style.display = 'none';
});