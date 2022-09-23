window.addEventListener('DOMContentLoaded' , () => {
    'use strict';

    const checkTextInputs = (selector) => {
        const txtInputs = document.querySelectorAll(selector);
    
        txtInputs.forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key.match(/[^а-яе 0-9]/ig)) {
                    e.preventDefault();
                }
            });
        });
    };
    
    checkTextInputs('[name="username"]');

});