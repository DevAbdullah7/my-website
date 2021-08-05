let menu = document.querySelector('.menu');
let parent = document.querySelector('.parent');
let navbar = document.querySelector('.navbar');
let ul_container = document.querySelector('.ul_container')
let nav = document.querySelector('.nav');
let content = document.querySelector('.content');
let body = document.querySelector('.body');
let clip1 = document.querySelector('.clip1');
let clip2 = document.querySelector('.clip2');
menu.onclick = function () {
    menu.classList.toggle('activate')
    parent.classList.toggle('activate')
    navbar.classList.toggle('activate')
    ul_container.classList.toggle('activate')
    nav.classList.toggle('activate')
    content.classList.toggle('activate')
    body.classList.toggle('activate')
}
// window.addEventListener('scroll', function() {
//     clip1.style.left = '90%';
//     clip1.style.left = window.pageYOffset+'px';
//     clip2.style.left = -window.pageYOffset+'px';
// })
console.log('Hi Nothing');