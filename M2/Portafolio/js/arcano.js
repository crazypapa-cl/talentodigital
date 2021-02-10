var valor = document.getElementById('valor')
var fecha = document.getElementById('fecha')
var lista = new Array()
var loop = true 

fecha.onchange=function(){
  lista = []
  var val = fecha.value
  valor.innerText=fecha.value
  console.log(fecha.value.length)
  console.log(typeof fecha.value)
  console.log(fecha.value.split('-'))
  loop = false
  for(i=0; i<val.length; i++){
    lista.push(val[i])
    valor.innerText=fecha.value.anchor()
    }
    console.log('-----------')
    console.log(lista)
 


}

