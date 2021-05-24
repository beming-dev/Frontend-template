function isElementUnderBottom(elem, triggerDiff) {
    const {top} = elem.getBoundingClientRect();
    const {innerHeight} = window;
    return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
    const elem = document.querySelector('.profile');
    if(isElementUnderBottom(elem, -10)) {
        elem.style.opacity = "0";
        elem.style.transform = 'translateY(70px)';
    }else{
        elem.style.opacity = "1";
        elem.style.transform = 'translateY(0)';
    }
}

window.addEventListener('scroll', handleScroll);