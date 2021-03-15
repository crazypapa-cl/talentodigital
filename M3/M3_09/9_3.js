
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
//Creando array de valores par
var colores = ['Green','yellow','Blue','Red']
//creando Numero al azar entre 0 y 3

var azar = Math.floor(Math.random()*(20 - 0)+1)
console.log('numero al azar '+ azar)

var pares = []

for(var i = 1; i<=azar; i++)
{
//console.log(i)
    if(i%2==0)
    {   
        pares.push(i)
       // console.log('es par')
    }
}

for (const a of pares) {
    console.log(a)
    
}
