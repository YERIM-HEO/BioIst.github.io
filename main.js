const toggleBtn = document.querySelector('.navbar_tool');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', ( ) => {
     menu.classList.toggle('active');
});

const menu_home = document.querySelector('#menu_home');
const menu_major = document.querySelector('#menu_major');
const menu_history = document.querySelector('#menu_history');
const main_title = document.querySelector("#main_title")

menu_home.addEventListener('click', ( ) => {
    document.querySelector("#menu_home").style.color = "black";
    document.querySelector("#menu_major").style.color = "grey";
    document.querySelector("#menu_history").style.color = "grey";
    document.querySelector("#home").style.display = "block";
    document.querySelector("#major").style.display = "none";
    document.querySelector("#history").style.display = "none";
});


menu_major.addEventListener('click', ( ) => {
    document.querySelector("#menu_home").style.color = "grey";
    document.querySelector("#menu_major").style.color = "black";
    document.querySelector("#menu_history").style.color = "grey";
    document.querySelector("#home").style.display = "none";
    document.querySelector("#major").style.display = "block";
    document.querySelector("#history").style.display = "none";
});

menu_history.addEventListener('click', ( ) => {
    document.querySelector("#menu_home").style.color = "grey";
    document.querySelector("#menu_major").style.color = "grey";
    document.querySelector("#menu_history").style.color = "black";
    document.querySelector("#home").style.display = "none";
    document.querySelector("#major").style.display = "none";
    document.querySelector("#history").style.display = "block";
});

main_title.addEventListener('click', ( ) => {
    document.querySelector("#menu_home").style.color = "black";
    document.querySelector("#menu_major").style.color = "grey";
    document.querySelector("#menu_history").style.color = "grey";
    document.querySelector("#home").style.display = "block";
    document.querySelector("#major").style.display = "none";
    document.querySelector("#history").style.display = "none";
});
