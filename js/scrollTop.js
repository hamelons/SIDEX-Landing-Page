const scrollTop = document.querySelector('.scroll__top');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 1600) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
});