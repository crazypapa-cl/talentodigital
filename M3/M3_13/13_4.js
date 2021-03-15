
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
var btn = document.getElementById('btn')
var box = ['mario','necesitar','correr','jugar','caminar','Pepe']







btn.addEventListener('click',getPalabra,'false')


function getPalabra(){
var azar = Math.floor(Math.random()*(0 - box.length)+box.length)
console.log(azar)
 sandbox.insertAdjacentHTML('beforeend','<h1>'+box[azar]+'</h1>')
}




