"use strict"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smoot: 1.5,
        effects: true
    })
    //   скорость скрола
    //   управление эффектами элементов (замедлять и тд)
    gsap.fromTo('.header',
        {
            opacity: 1
        },
        {
            opacity: 0,
            scrollTrigger: {
                trigger: '.header',
                start: 'center',
                end: '1200',
                scrub: true
            }
        })

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__inner')

    itemsL.forEach(item => {
        gsap.fromTo(item, {
            x: -150,
            opacity: 0,
        },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: item,
                    scrub: true
                }
            })
    })

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__inner')

    itemsR.forEach(item => {
        gsap.fromTo(item, {
            x: 90,
            opacity: 0,
        },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: item,
                    scrub: true
                }
            })
    })
}


let galleryImage = document.querySelectorAll('.gallery__item');
let popup = document.querySelectorAll('.gallery__popup');

for (let i = 0; i < galleryImage.length; i++) {
    galleryImage[i].addEventListener('click', () => {
        popup[i].classList.add('_active');
    })
}
// for (let i = 0; i < popup.length; i++) {
//     popup[i].addEventListener('click', () => {
//         popup[i].classList.remove('_active');
//     })
// }
// сделать кнопку выходи что бы слайдер попап зпкрывался через кнопку



// меню бургер
// const menu = document.querySelector('.menu');
// const burger = document.querySelector('.header__burger');
// const burgerContent = document.querySelector('.header__content');
// const hiddenSectionTwo = document.querySelector('.header__section-two');

// if (menu && burger && burgerContent && hiddenSectionTwo) {
//   burger.addEventListener('click', () => {
//     menu.classList.toggle('_active');
//     burger.classList.toggle('_active');
//     burgerContent.classList.toggle('_full');
//     hiddenSectionTwo.classList.toggle('_full');
//   })
// }



// свайвер
  const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

// let swiperTwo = new Swiper(".mySwiper-two", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//   },
// });








//анимации
// gsap.registerPlugin(ScrollTrigger)

// const laptopScreen = window.matchMedia('(min-width:767px)');

// if (laptopScreen.matches) {

// create-section

// gsap.fromTo(
//   ".anim1",
//   {
//     opacity: 0,
//     xPercent: 50,
//   },
//   {
//     scrollTrigger: {
//       trigger: '.create__description',
//       start: 'top center ',

//     },
//     duration: 1.5,
//     opacity: 1,
//     xPercent: 0,
//     ease: "none"
//   });

// gsap.fromTo(
//   ".anim2",
//   {
//     opacity: 0,
//     xPercent: -50,
//   },
//   {
//     scrollTrigger: {
//       trigger: '.anim1',
//       start: 'center center',

//     },
//     duration: 1.5,
//     opacity: 1,
//     xPercent: 0,
//     ease: "none"
//   });
// gsap.fromTo(
//   ".anim3",
//   {
//     opacity: 0,
//     xPercent: 50,
//   },
//   {
//     scrollTrigger: {
//       trigger: '.anim2',
//       start: 'center center',

//     },
//     duration: 1.5,
//     opacity: 1,
//     xPercent: 0,
//     ease: "none"
//   });
// templates-section











