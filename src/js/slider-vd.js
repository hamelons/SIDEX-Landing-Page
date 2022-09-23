const btns = document.querySelectorAll('.home__slider__btn');
const slides = document.querySelectorAll('.video__slider');
const pageSlides = document.querySelectorAll('.home__descr');

let sliderNav = function(e) {
    btns.forEach((btns) => {
        btns.classList.remove('active')
    });

    slides.forEach((slides) => {
        slides.classList.remove('active')
    });

    pageSlides.forEach((pageSlides) => {
        pageSlides.classList.remove('active')
    });

    btns[e].classList.add('active');
    slides[e].classList.add('active');
    pageSlides[e].classList.add('active');
}

btns.forEach((btns , i) => {
    btns.addEventListener('click' , () => {
        sliderNav(i);
    });
});