
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
// Obteniendo el Formulario 
var formulario = document.getElementById('formulario')
var form = document.querySelectorAll('#formulario input')
var canvas=document.getElementById('canvas')
var descuneto = document.getElementById('descuento')
var precioneto = document.getElementById('precioneto')
var total = document.getElementById('total')
var preciodescuento = document.getElementById('preciodescuento')
total.innerHTML='<p style="color:yellow">hola</p>'
preciodescuento.innerHTML='<p style="color:yellow">hola</p>'
precioneto.innerHTML='<p style="color:yellow">hola</p>'
descuneto.innerHTML='<p style="color:yellow">hola</p>'

//Escuchando el eveneto submit del formulario 
formulario.addEventListener('submit', calcular,false)

// Iterando sobre el array de queryselectorAll(input) para obtener los input


function calcular(e){
console.log(form[0].value)
 e.preventDefault()
 precios={
    green:80000,
    red:50000,
    blu:35000
 }   

 var green = parseInt(form[0].value)
 var red = parseInt(form[1].value)
 var azul = parseInt(form[2].value)
 var subgreen = precios.green*green
 var subred = precios.red*red
 var subblu = precios.blu*azul
 var neto = subred + subblu + subgreen
 var iva = neto*19/100
 var des = neto*15/100
 var total = iva+neto
 var totaldes= neto-des
 precioneto.innerHTML='<p style="color:yellow">'+totaldes+'</p>'
 console.log(form[2].value)

 preciodescuento.innerHTML='<p style="color:yellow">$'+neto+'</p>'
descuento.innerHTML='<p style="color:yellow">'+des+'</p>'
 
}


/*  

*/