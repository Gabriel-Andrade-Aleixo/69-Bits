window.addEventListener("scroll", function () {
    let header = document.querySelector('#header')
    header.classList.toggle('scrollh', window.scrollY > 100)
})


function limparFormulario() {
    var formulario = document.getElementById('meuFormulario');

    var campos = formulario.getElementsByTagName('input');

    for (var i = 0; i < campos.length; i++) {
        campos[i].value = '';
    }

    var mensagem = document.getElementById('mensagem');
    mensagem.style.display = 'flex';
    var mensagem = document.getElementById('mensagem');
    mensagem.style.justifyContent = 'center';
    setTimeout(function() {
        mensagem.style.display = 'none';
    }, 3000);

}

document.getElementById("login").onclick = function() {
    window.location.href = "./index.html";
  };