// adicionando btnMobile

const btnMobile = document.getElementById('menuMObile')

function abirMenu() {
    const navMenu = document.getElementById('nav')
    navMenu.classList.toggle('open')
}

btnMobile.addEventListener('click', abirMenu);


