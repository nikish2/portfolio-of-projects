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
                end: '1300',
                scrub: true
            }
        })

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

    itemsL.forEach(item => {
        gsap.fromTo(item, {
            x: -110,
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

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

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


    let itemsTextL = gsap.utils.toArray('.gallery__left .gallery__text-block')

    itemsTextL.forEach(item => {
        gsap.fromTo(item, {
            rotationY: 55,
            transformPerspective: 500,
        },
            {
                rotationY: 0,
                scrollTrigger: {
                    trigger: item,
                    scrub: true
                }
            })
    })

    let itemsTextR = gsap.utils.toArray('.gallery__right .gallery__text-block')

    itemsTextR.forEach(item => {
        gsap.fromTo(item, {
            rotationY: -55,
            transformPerspective: 400,
        },
            {
                rotationY: 0,
                scrollTrigger: {
                    trigger: item,
                    scrub: true
                }
            })
    })
}


// свайвер
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    centeredSlidesBounds: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 1,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


// let galleryImage = document.querySelectorAll('.gallery__item');


// let popup = document.querySelectorAll('.gallery__popup');
// let exit = document.querySelectorAll('.gallery__popup-exit');

// for (let i = 0; i < galleryImage.length; i++) {
//     galleryImage[i].addEventListener('click', () => {
//         popup[i].classList.add('_active');
//     })

//     console.log(galleryImage);
// }
// for (let i = 0; i < exit.length; i++) {
//     exit[i].addEventListener('click', () => {
//         popup[i].classList.remove('_active');
//     })
// }
// сделать кнопку выходи что бы слайдер попап зпкрывался через кнопку







