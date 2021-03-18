"use strict"
//alert("IMC")
function calcularIMC() {
    //declaración de variables
    let peso, altura, imc, mensaje;
    //capturamos datos
    peso = document.getElementById("peso").value;
    console.log(peso);
    altura = document.getElementById("altura").value/100;
    console.log(altura);
    //proceso - calculo de IMC
    imc = peso / (altura*altura);
    //otra opcion de calculo
    //imc = peso / Math.pow(altura, 2);
    //mostrar resultado imc en input, consola y navegador 
    document.getElementById("imc").value = imc.toFixed(2); 
    console.log(imc.toFixed(2)); 
    document.getElementById("resultadoIMC").innerHTML = imc.toFixed(2); 
    //Comparamos el resultado mediante IF y enviamos mensajes
    if (imc<=20.5) {
        mensaje = "Estas bajo peso " + (altura*altura*20.5-peso).toFixed(1) + " Kilos";
        
    } else if(imc >=25.5){
        mensaje = "Tienes sobrepeso " + (peso-altura*altura*25.5).toFixed(1) + " Kilos";
    } else{
        mensaje ="Tienes peso normal";
    }
    //mostrar mensaje de texto en input, consola y html (innerHTML)
    document.getElementById("mensaje").value=mensaje;
    console.log(mensaje);
    document.getElementById("mensajeIMC").innerHTML = mensaje;
}