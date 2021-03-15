
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
var hora = document.getElementById('hora')
var fecha = document.getElementById('fecha')
var time = new Date()


console.log(fecha)


hora.addEventListener('click',getHora,'false')
fecha.addEventListener('click',getFecha,'false')


function getHora(){
 time.getHours()
 sandbox.insertAdjacentHTML('beforeend','<h1>Ahora la hora es : '+time.getHours()+'</h1>')
}

function getFecha(){
    sandbox.insertAdjacentHTML('beforeend','<h1>Hoy es  : '+time.toLocaleString()+'</h1>')
}
 



