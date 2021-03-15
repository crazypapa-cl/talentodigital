
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
//Creando array 
var box = []
var conteo = []
var intro = prompt('Subir productos','El dato que quiera, todos son string')
for(var i=0; i<10; i++){
    var intro = prompt('Subir productos','El dato que quiera, todos son string')
    box.push(intro)
    console.log(box[i])
    if(intro=='fin'){
        i=12
        
    }
    console.log(i)
}
sandbox.insertAdjacentHTML('beforeend','<h1>'+conteo.length+'</h1>')


