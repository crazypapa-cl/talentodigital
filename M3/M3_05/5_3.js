
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
//Valor ingresado por el usuario 
var intro = prompt('Ingrese un valor numerico','Solo numeros porfavor')
//concadenacion de valores
    for(var i = 1; i<=intro; i++){
        if(intro%2==0){
            sandbox.insertAdjacentHTML('beforeend','<h1>El numero: '+intro+' es par')
        }else{
            sandbox.insertAdjacentHTML('beforeend','<h1>El numero: '+intro+'  es impar')
        }
    }
    