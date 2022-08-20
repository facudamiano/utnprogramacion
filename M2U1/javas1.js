


var caja1 = document.getElementById('caja1'),
    caja2 = document.getElementById('caja2'),
    caja3 = document.getElementById('caja3'),
    caja = document.querySelector('body')



function cambio(){
    caja.style.background = 'yellow' 
    
}

function cambio1(){
    caja.style.background = 'red'
}

function cambio2(){
    caja.style.background = 'green'
}




caja3.addEventListener('click',cambio2)
caja2.addEventListener('click',cambio)
caja1.addEventListener('click',cambio1)
