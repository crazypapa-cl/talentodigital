"use strict"
//alert("Captura de datos")
//funcion recibir() captura tipo de datos String
function recibir() {
    //captura de datos por nombre, queda en valor
    let valor = document.getElementById("nombre").value;
    //mostrar dato en div resultado
    document.getElementById("nombre1").innerHTML = valor;
    let valor2 = document.getElementById("apellido").value;
    //mostrar dato en div resultado
    document.getElementById("apellido1").innerHTML = valor2; 
}
/*Funcion sumar() - suma 2 valores*/

function sumar(){
    //declaración de Variables
    let valor1, valor2, suma;
    //captura de datos
    valor1 = document.getElementById("num1").value;
    valor2 = document.getElementById("num2").value;
     //Proceso Sumar se deben parsear los numeros
     suma = parseFloat(valor1) + parseFloat(valor2);

    //salida
    console.log(suma);
    document.getElementById("resultado").innerHTML = suma;  
}

function restar(){
    //declaración de Variables
    let valor1, valor2, resta;
    //captura de datos
    valor1 = document.getElementById("num1").value;
    valor2 = document.getElementById("num2").value;
    console.log(valor1);
     //Proceso restar se deben parsear los numeros
     resta = Number(valor1) - Number(valor2);
    //salida
    console.log(resta);
    document.getElementById("resultadoResta").innerHTML = resta.toFixed(3); //toFixed() limita decimales 
}