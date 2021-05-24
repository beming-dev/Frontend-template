let navToggler = document.querySelector('.nav-toggle');
let nav = document.querySelector('.navigation');


function onNavClick(){
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
        setTimeout(function () {
            nav.classList.remove('visuallyhidden');
        }, 20);
    } else {
        nav.classList.add('visuallyhidden');    
        nav.addEventListener('transitionend', function(e) {
            nav.classList.add('hidden');
        }, {
            capture: false,
            once: true,
            passive: false
          });
    }
}

navToggler.addEventListener('click', onNavClick, false);