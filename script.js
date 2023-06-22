// var btn = document.querySelector('.burger__menu');
// var list = document.querySelector('.drop__menu_main');

// btn.addEventListener('click', () => {
//     list.classList.toggle('active');
//     // list.style.transition = '0.4s';
// });


var btn = document.querySelector('.burger__menu');
var btnClose = document.querySelector('.burger__menu_close');
var img = document.querySelector('.burger__menu img');
var menu = document.querySelector('.drop__menu_main');

btn.addEventListener('click', () => {
    img.src = "./img/close.png";
    btn.style.display = 'none';
    btnClose.style.display = 'block';
    menu.classList.add('active');
});

btnClose.addEventListener('click', () => {
    img.src = "./img/ic-menu-navigation.png";
    btnClose.style.display = 'none';
    btn.style.display = 'block';
    menu.classList.remove('active');
});



