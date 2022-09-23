document.body.onload = function() {

    setTimeout(function() {
        let preloader = document.getElementById('page__preloader');
        if (!preloader.classList.contains('active')) {
            preloader.classList.add('active');
        }
    }, 2000);
}