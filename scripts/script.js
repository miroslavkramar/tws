const navHeight = document.querySelector('#nav').offsetHeight;
console.log('nav height:' + navHeight)
document.documentElement.style.setProperty('--scroll-padding', navHeight + 'px');

const menu = document.getElementById('menu');
function toggle_menu() {
    menu.classList.toggle('show')
}