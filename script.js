var btn = document.querySelector('.burger__menu'),
 list = document.querySelector('.drop__menu_main');


btn.addEventListener ('click', () =>{
    list.classList.toggle('active')
    // list.style.transition = '0.4s';
})
