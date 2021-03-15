
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
//Creando array de valores par

var pares = []

for(var i = 1; i<=49; i++)
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


