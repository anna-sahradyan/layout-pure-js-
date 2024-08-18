
//! document.addEventListener("DOMContentLoaded", renderTeaItems)
const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu_close')
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close')
menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list_open');
    menuShadow.classList.toggle('menu--visible')
});
menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list_open');
    menuShadow.classList.remove('menu--visible')
})

