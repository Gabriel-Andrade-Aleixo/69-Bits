window.addEventListener("scroll", function () {
    let header = document.querySelector('#header')
    header.classList.toggle('scrollh', window.scrollY > 100)
})

window.onload = function () {
    window.scrollTo(0, 0);
}

function enviarFormulario() {
    var formulario = document.getElementById('meuFormulario');
    var campos = formulario.getElementsByTagName('nome', 'email', 'mansag', 'fem', 'masc', 'outro');
    for (var i = 0; i < campos.length; i++) {
        campos[i].value = '';
    }

    var mensagem = document.getElementById('mensagem');
    mensagem.style.display = 'flex';
    var mensagem = document.getElementById('mensagem');
    mensagem.style.justifyContent = 'center';
}