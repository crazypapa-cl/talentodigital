
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
var simbolo=document.getElementById('simbol')
var visor = document.getElementById('hora')
//console.log(simbolo.textContent)
//Investigando un objeto, cientos de cosas dentro!!
/*for (const property in simbolo) {
    console.log(`${property}: ${simbolo[property]}`);
  }*/
//Creando un nuevo nodo en el DOM typo Boton,

//Cereando el boton y poniendolo a la escuha del onClick, asigando funcion modificar()
var btn = document.querySelector('button')
btn.onclick= function(e){
    console.log(e)
    //e.preventDefault()
    let ahora = new Date()
    let hora = ahora.getHours()
    if(hora=='0')
    {
        hora = '12'
    }
    let minutos = ahora.getMinutes()
    let segundos = ahora.getSeconds()
    let reloj = hora+':'+minutos+':'+segundos
    console.log(ahora.getHours())
let miText = simbolo.textContent
if(miText==='ℵ'){
    simbolo.innerText='®'
    visor.innerText=reloj
    
}else {
    simbolo.innerText='ℵ'
    visor.innerText=reloj
}


}







