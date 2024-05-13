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
    // элементы левой галереи
    let itemsL = gsap.utils.toArray('.gallery__left_gsap .gallery__item_gsap')
    itemsL.forEach(item => {
        gsap.fromTo(item, {
            x: -90,
            opacity: 0,
            rotationY: 35,
            transformPerspective: 1200,
        },
            {
                rotationY: 0,
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: item,
                    scrub: true,
                    end: 'center'
                }
            })
    })
    // эдементы правой галереи
    let itemsR = gsap.utils.toArray('.gallery__right_gsap .gallery__item_gsap')
    itemsR.forEach(item => {
        gsap.fromTo(item, {
            x: 90,
            opacity: 0,
            rotationY: -35,
            transformPerspective: 1200,
        },
            {
                rotationY: 0,
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: item,
                    scrub: true,
                    end: 'center'
                }
            })
    })
    // текстовые элементы  галереи
    let itemsTextL = gsap.utils.toArray('.gallery-gsap  .gallery__text-block_gsap')

    itemsTextL.forEach(item => {
        gsap.fromTo(item, {
            scale: .3,
        },
            {
                scale: 1.1,
                scrollTrigger: {
                    trigger: item,
                    scrub: true
                }
            })
    })

    // элементы левой галереи страница вторая 
    let itemsLeftTwo = gsap.utils.toArray('.new-page__left_gsap .new-page__item-gsap')
    itemsLeftTwo.forEach(item => {
        gsap.fromTo(item, {
            opacity: .7,
            rotationY: 2,
            transformPerspective: 1200,
        },
            {
                rotationY: 0,
                opacity: 1,

                scrollTrigger: {
                    trigger: item,
                    scrub: true,
                    end: 'center'
                }
            })
    })

    // элементы правой галереи страница вторая 
    let itemsRightTwo = gsap.utils.toArray('.new-page__right_gsap .new-page__item-gsap')
    itemsRightTwo.forEach(item => {
        gsap.fromTo(item, {
            opacity: .7,
            rotationY: -2,
            transformPerspective: 1200,
        },
            {
                rotationY: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: item,
                    scrub: true,
                    end: 'center'
                }
            })
    })
}
// свайпер

    // Поиск элемента с классом mySwiper
    let swiper = document.querySelector(".mySwiper");

    // Проверка, найден ли элемент с указанным классом
    if (swiper) {
        // Если найден, выполнить инициализацию Swiper
         swiper = new Swiper(".mySwiper", {
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
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }
        });
    }


// Печатающийся текст


const path = window.location.pathname;
if (path === '/index.html') {
    let typed = document.querySelector("#text");
    if (typed) {
        typed = new Typed('#text', {
            strings: ['Продающие. ^600', 'Адаптивные. ^600', 'Креативные. ^600', 'Быстрые. ^600'],
            typeSpeed: 150,
            loop: true
        });
    }
}

if (path === '/full-page.html') {
    let typedTwo = document.querySelector("#text2");
    if (typedTwo) {
        typedTwo = new Typed('#text2', {
            strings: ['Cайт для вашего бизнеса. ^600', 'Расширте свои возможности. ^600'],
            typeSpeed: 150,
            loop: true
        });
    }
}

if (path === '/adaptiv.html') {
    let typedTwo = document.querySelector("#text3");
    if (typedTwo) {
        typedTwo = new Typed('#text3', {
            strings: ['1920px. ^600', '1024px. ^600', '768px. ^600', '320px. ^600'],
            typeSpeed: 150,
            loop: true
        });
    }
}


// бургер
const menu = document.querySelector('.nav__list');
const menuItem = document.querySelectorAll('.nav__item');
const burger = document.querySelector('.header__burger-inner');
const burgerExit = document.querySelector('.header__burger');
for (let i = 0; i < menuItem.length; i++) {
    if (menu && burger) {
        burger.addEventListener('click', () => {
            menu.classList.toggle('_burger-active');
            menuItem[i].classList.toggle('_burger-active');
            burgerExit.classList.toggle('_burger-exit');
        })
    }
}






