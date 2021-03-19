
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
// Obteniendo el Formulario 
var formulario = document.getElementById('formulario')
var form  = document.querySelectorAll('#formulario input')
var canvas=document.getElementById('canvas')

//Escuchando el eveneto submit del formulario 
formulario.addEventListener('submit', calcular)

// Iterando sobre el array de queryselectorAll(input) para obtener los input

function calcular(e){
    e.preventDefault()
    var n = 3
    var nota1 = parseFloat(form[0].value)
    var nota2 = parseFloat(form[1].value)
    var nota3 = parseFloat(form[2].value)
    var pro = nota1 + nota1 + nota3 
    var promedio = pro/n

    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
    var evaluar = promedio.toFixed(1)
    console.log(evaluar)

    if(evaluar >=6.0){
        console.log('mayor a o igual 6.0')
        canvas.innerHTML="<p font-size:32px; margin:10px;>"+evaluar+"</p><small style='background-color:green; padding:20px'>estudiante aprobado con nota sobresaliente</small>"
    }else if(evaluar >=4 ){
    console.log('es mayor o igual a 4')
    canvas.innerHTML="<p font-size:32px; margin:10px;>"+evaluar+"</p><small style='background-color:orange; padding:20px'>estudiante aprobado</small>"

    }else{
        console.log('reprobado')
        canvas.innerHTML="<p font-size:32px; margin:10px;>"+evaluar+"</p><small style='background-color:red; padding:20px'>estudiante  reprobado </small>"

    }

}