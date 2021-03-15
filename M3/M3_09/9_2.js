
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
//Creando array de valores par
var colores = ['Green','yellow','Blue','Red']
//creando Numero al azar entre 0 y 3





for(i=0;i<=6; i++){
    console.log(i)
    var azar = Math.floor(Math.random()*(4 - 0))
    sandbox.insertAdjacentHTML('beforeend','<span style="background-color:'+colores[azar]+';">HOLA</span>')
}


for (const c of colores) {

console.log(colores)
    
}


