function isElementUnderBottom(elem, triggerDiff) {
    const {top} = elem.getBoundingClientRect();
    const {innerHeight} = window;
    return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
    const profile = document.querySelector('.profile');
    const intro = document.querySelector('.singer-intro');
    if(isElementUnderBottom(profile, -10)) {
        profile.style.opacity = "0";
        profile.style.transform = 'translateY(70px)';
    }else{
        profile.style.opacity = "1";
        profile.style.transform = 'translateY(0)';
    }

    if(isElementUnderBottom(intro, -10)) {
        intro.style.opacity = "0";
        intro.style.transform = 'translateX(70px)';
    }else{
        intro.style.opacity = "1";
        intro.style.transform = 'translateY(0)';
    }
}

window.addEventListener('scroll', handleScroll);