const hamburg = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');


hamburg.addEventListener('click' , () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click' , () => {
    menu.classList.remove('active');
});