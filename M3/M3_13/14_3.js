
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
// Obteniendo el Formulario 
var formulario = document.getElementById('formulario')
var form  = document.querySelectorAll('#formulario input')
var canvas=document.getElementById('canvas')

//Escuchando el eveneto submit del formulario 
formulario.addEventListener('submit', calcular,false)

// Iterando sobre el array de queryselectorAll(input) para obtener los input


console.log(form[0])

function calcular(e){
 e.preventDefault()
    var a = form[0].value
    var b = form[1].value
    console.log(a)
    console.log(typeof(b))
    canvas.innerHTML='<h3>'+a*b/2+' cm2</h3>'
}