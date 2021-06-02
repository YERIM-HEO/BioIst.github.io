const toggle = document.querySelector('.navbar__tool');
const menu = document.querySelector('.navbar_menu');

toggle.addEventListener('click', ( ) => {
    menu.classList.toggle('active')
});

