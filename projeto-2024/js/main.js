// adicionando btnMobile

const btnMobile = document.getElementById('menuMObile')

function abrirMenu() {
    const navMenu = document.getElementById('nav')
    navMenu.classList.toggle('open')
}

btnMobile.addEventListener('click', abrirMenu);



// Função para trocar a logoMobile quando a largura da tela atingir 570px/
function trocarLogo() {
    let logo = document.getElementById('logo-principal');
    if (window.innerWidth <= 600) {
        logo.src = 'imagens/4-removebg-preview.png';
    } else {
        logo.src = 'imagens/1.jpg';
    }
}

// Chamar a função no carregamento da página e quando a tela for redimensionada
window.onload = trocarLogo;
window.onresize = trocarLogo;



