
const menuButton = document.querySelector('#menu');
const menuBar = document.querySelector('#nav');

menuButton.addEventListener('click', () => {
    menuBar.classList.toggle('open');
    menuButton.classList.toggle('open');
})