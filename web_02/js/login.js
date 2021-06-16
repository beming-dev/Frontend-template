let signUpButton = document.getElementsByClassName('to-sign-in')[0];
let signInButton = document.getElementsByClassName('to-sign-up')[0];
const container = document.getElementsByClassName('container')[0];

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active')
}
);

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active')
    console.log(1);
}
);