/* MENU */
let header = document.querySelector('.header');
    scrollPrev = 0;

$(window).scroll(function() {
    let scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev ) {
        header.classList.add('out');
    } else {
        header.classList.remove('out');
    }
    scrollPrev = scrolled;
});
/* /MENU */

/* MOBILE MENU */
let navToggle = document.querySelector('#nav__toggle');
let menuToggle = document.querySelector('#menuToggle');
let links = document.querySelectorAll('a');
let menuCheckbox = document.querySelector('.nav__checkbox');
let logoSvg = document.querySelector('#logo__link');

navToggle.onclick = function () {
    menuToggle.classList.toggle('menuShow');
}

links.forEach(function(link) {
    link.addEventListener("click", function () {
        menuToggle.classList.remove('menuShow');
        menuCheckbox.checked = false;
    })
});

logoSvg.addEventListener("click", function () {
    location.href='index.php'
})

/* /MOBILE MENU */


// BUTTONS
let openModal = document.querySelector('#custom__button');
let customModal = document.querySelector('#custom__modal');
let overlay = document.querySelector('#main-overlay');
let modalClose = document.querySelector('#custom__modal-close');

openModal.addEventListener('click' , function() {
    customModal.classList.add('show')
    overlay.classList.add('show')
})

modalClose.addEventListener('click' , function() {
    customModal.classList.remove('show')
    overlay.classList.remove('show')
})

overlay.addEventListener('click' , function() {
    customModal.classList.remove('show')
    overlay.classList.remove('show')
})
// //BUTTONS




/* SWIPER */
const heroSwiper = new Swiper('.hero__swiper', {
    loop: false,
    spaceBetween: 0,
    slidesPerView: '1',
    slidesOffsetAfter: 0,
});
/* SWIPER */