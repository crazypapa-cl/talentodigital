
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
//Valor ingresado por el usuario 
//concadenacion de valores
var nEmpleados = prompt('Cantiadad de empleados','4 esta bien')
var sueldos = 0

for(var i = 1; i<=nEmpleados; i++){
var  nombre_Empleado = prompt('Nombre','Nombre del Nuevo empleado')
    sandbox.insertAdjacentHTML('beforeend','<h2>'+nombre_Empleado+'</h2>')  
var  sueldo_Empleado = prompt('Sueldo','Solo numeros porfavor')
     sandbox.insertAdjacentHTML('beforeend','<h2>Sueldo de : $'+sueldo_Empleado+'</h2>')
     sueldos=sueldos+parseInt(sueldo_Empleado)
     console.log(sueldos)
}
sandbox.insertAdjacentHTML('beforeend','<h2>El promedio de sueldos es: '+sueldos/nEmpleados+'</h2>')


