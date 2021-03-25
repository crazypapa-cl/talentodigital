
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
// Obteniendo el Formulario 
var frase = document.getElementById('abuelo')
console.log(frase)


//tomadno los inputs del formulario
var form  = document.querySelectorAll('#formulario input')
// Obteniendo el DIV para mostrar las alertas 
var alerta = document.getElementById('alerta')


var txt = ''
console.log('hola')
document.querySelector('input').onkeyup = function(e) {
    console.log(e.key)
    alerta.innerText=e.key
    txt = txt + e.key
    frase.insertAdjacentText('beforeend',txt)
  console.log(txt)
}

var btn = document.createElement('button')
console.log(btn.style)
btn.innerText="TECLAS"
console.log(btn)
sandbox.appendChild(btn)
btn.onclick = function(e){
    alert(e)
    console.log(e)
}
