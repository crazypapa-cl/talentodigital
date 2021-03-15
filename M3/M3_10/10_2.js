
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
//Creando array 
var box = []
var conteo = []

console.log(azar)
for(var i=1; i<=10; i++){
    var azar = Math.floor(Math.random()*(5 - 0)+1)
    box.push(azar)
    sandbox.insertAdjacentHTML('beforeend','<span>'+azar+'</span>')
    if(azar == 3){
        conteo.push(azar)
        console.log('Azar es igual a '+azar)
    }
    
}
sandbox.insertAdjacentHTML('beforeend','<h1>'+conteo.length+'</h1>')
console.log(box)

