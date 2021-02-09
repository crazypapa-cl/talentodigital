var valor = document.getElementById('valor')
var fecha = document.getElementById('fecha')
console.log(fecha.value)


fecha.onchange=function(){
  valor.innerText=fecha.value
  console.log(fecha.value.length)
  console.log(typeof fecha.value)
  console.log(fecha.value.split('-'))
}

