
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
//Valor ingresado por el usuario 
var k ="k"
//concadenacion de valores
for(var i = 1; i<=10; i++){
    
    sandbox.insertAdjacentHTML('beforeend','<span style="margin-left:'+i*i+'px">'+k+'</span>')

}


