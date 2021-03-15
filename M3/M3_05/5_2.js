// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
//Valor ingresado por el usuario 
var intro = prompt('Ingrese un valor numerico','Solo numeros porfavor')
//concadenacion de valores
var acumulador = ""
//numeros sumados
var suma = 0
console.log("concadenando"+acumulador.concat("+",intro))
console.log("concadenando"+acumulador.concat("+2",intro))

var con = ""
for(var i = 1; i<=intro; i++){
    con +=""+acumulador.concat(i+"+")
    console.log(acumulador.concat(i+"+"))
    suma=suma+i
    console.log(suma)


}
acumulador.concat(' ', 'hola')
sandbox.insertAdjacentHTML("beforeend","<h1>"+con+"="+suma+"</h1>")
        
