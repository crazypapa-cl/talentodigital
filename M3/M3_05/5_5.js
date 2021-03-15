
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
//Valor ingresado por el usuario 
var gato =""
//concadenacion de valores
for(var i = 1; i<=9; i++){
    gato=gato.concat('#')
    sandbox.insertAdjacentHTML('beforeend','<p>'+gato+'</p>')

}


