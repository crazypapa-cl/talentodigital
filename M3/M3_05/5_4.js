
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
//Valor ingresado por el usuario 
var intro = prompt('Ingrese un valor numerico','Solo numeros porfavor')
//concadenacion de valores
sandbox.insertAdjacentHTML('beforeend','<h1>La tabla del  '+intro+"</h1>")

for(var i = 1; i<=9; i++){
    
    sandbox.insertAdjacentHTML('beforeend','<p>'+intro+" x "+i+" = "+intro*i+'</p>')
}


