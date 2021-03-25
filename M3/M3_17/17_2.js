
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
// Obteniendo el Formulario 
var formulario = document.getElementById('formulario')

//tomadno los inputs del formulario
var form  = document.querySelectorAll('#formulario input')
// Obteniendo el DIV para mostrar las alertas 
var alerta = document.getElementById('alerta')


//Declarando expresiones regulares para saber si el texto es digito o contiene un espacio
var expresion = {
    nombre: /^[a-zA-ZÀ-ÿ]{1,40}$/,
    edad: /^\d{1,2}$/
}
console.log('hola')
document.querySelector('html').onkeypress = function(e) {
    alert(e);
    console.log(e)
}

