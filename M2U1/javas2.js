var texto = document.getElementById('texto')
var contador=document.getElementById('contador')

function contar(){
    contador.innerText = texto.value.length
}

texto.addEventListener('keyup', contar)

