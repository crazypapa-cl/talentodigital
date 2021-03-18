"use strict"//previene errores de variables*/
window.onload = (function () {
alert("Buen día");
/*Tipos de variables  */
var edad = 30;
const iva = 19;
console.log(iva);

/*Repaso de funciones*/
function suma(valor1, valor2) {
    let total = valor1 + valor2;
    return total;  
}
let total =  suma(10,20);
console.log("el resultado de la suma es:",total);

function resta(num1 = 15, num2 = 10){
    let restar = num1 - num2;
    return restar;

}
/* guardo la funcion en una variable y despues de muestra*/
let resultado = resta();
console.log(resultado);

/* función activada por botón*/
var contador = 0;
function contar() {
    contador++;
    console.log("Ha clicleado " + contador + " veces");
    
}
function elevar(base, exp) {
    let resultado = base ** exp
    return resultado
}
var cuadrado = elevar(5,2)
console.log("5 elevado a 2 es "+cuadrado);
var cuadrado = elevar(3,3)
console.log("3 elevado a 3 es "+ cuadrado);

//repaso condicionales
var curso;
//Ingresamos datos por prompt
curso = prompt("ingrese nombre curso")
//proceso IF
if(curso == "frontend"){
    console.log("Genial curso");
    alert("genial curso")
}else{
    console.log("Mejor cambiate");
    alert("Mejor Cambiarse de curso")
}

/*Desafio 1 
Ingresar numero por prompt, enviar resultado indicando mensaje:
si es numero par o impar, mediante funcion utilizando condicionales if */
let numero = prompt("Ingrese un número");
/*invocar funcion*/
let resultado2 = parImpar(numero)
alert("el numero " + numero + " es " + resultado2);

   function parImpar(numero) {
      if(numero % 2 == 0) {
        return "par"
      }else {
        return "impar" 
      }
      
   }
 /*Función saludar*/
   function saludo() {
    let saludo = "Bienvenido a Funciones";
    alert(saludo);
    return saludo;
   }

/*Función mensaje Nombre y Edad */
/*mediante un boton activar funcion mensaje que envie nombre y edad mediante parametros (consola)*/
function mensaje(nombre="Juan", edad=35) {
    let texto = nombre + " tiene " + edad + " años";
    alert(texto);
   // console.log(texto);
    return texto;
}
/*invocar funcion*/
console.log(mensaje());
//mensaje();

/*Funcion Sumar*/
function sumar(num1=10, num2=20) {
    let suma = num1 + num2
    alert("La suma es: "+suma);
    return suma;
}
//invocacion sumar()
console.log("La suma es: "+suma(25,45));


/*Captura de datos*/
let elemento1 = document.getElementById("texto1");
var contenido1 = elemento1.innerHTML;
    
    })


