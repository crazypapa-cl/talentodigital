var valor = document.getElementById('valor')
var fecha = document.getElementById('fecha')
var img = document.getElementById('img')
var lista = new Array()
var na = []
var carta =0
numero=0
const reducer = (accumulator, currentValue) => accumulator + currentValue;
fecha.onchange=function(){
  text = fecha.value
  console.log(text)
  console.log(typeof text)
  var g1=text.indexOf('-')
  console.log(g1)
  console.log(text)
  console.log(typeof text)
  console.log(text.slice(0,4))
  na.push(text.slice(0,4))
  na.push(text.slice(5,7))
  na.push(text.slice(8,10))
  text=na[0]+na[1]+na[2]
  console.log(text)
  for (i=0; i < text.length;i++) {
    carta += parseInt(text[i],10)
  }
  console.log(carta)
  if(carta>22){
    var text = carta.toString()
    console.log('es mayor a 22')
    numero += parseInt(text[0]) + parseInt(text[1]);
    console.log(numero)

  }
  img.setAttribute('src',`img/${numero}.jpg`);
  img.setAttribute('class','arcano')

}


/*na.forEach(function(elemento, indice, array) {
  console.log(elemento, indice);
})*/