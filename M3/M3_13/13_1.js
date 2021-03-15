
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
var boton = document.getElementById('boton')
console.log(boton)
//Creando array 

boton.addEventListener('click',getNow,'false')
function getNow(){
    var hora = new Date();
    sandbox.insertAdjacentHTML('beforeend','<h1>'+hora+'</h1>')
}


