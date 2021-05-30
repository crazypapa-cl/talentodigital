"use strict"

// Función promediar() - Promediar 3 notas.
function calcularPromedio() {
    // Declarar variables.
    let nota1, nota2, nota3, numero1, numero2, numero3, suma, promedio, promedioAproximado, estilo_texto, condicion, mensajeHTML

    // Leer las notas.
    nota1 = document.getElementById('nota1').value
    nota2 = document.getElementById('nota2').value
    nota3 = document.getElementById('nota3').value

    // Convertir notas a números.
    numero1 = Number(nota1)
    numero2 = Number(nota2)
    numero3 = Number(nota3)

    // Promediar las notas ingresadas.
    suma = numero1 + numero2 + numero3
    promedio = suma / 3
    promedioAproximado = promedio.toFixed(1);

    // Mostrar el promedio calculado en la ventana del navegador.
    document.getElementById('resultado-promedio').innerHTML = '<span style="font-weight: bold;">' + promedioAproximado + '</span>'

    // Generar mensaje sobre la condición del estudiante según el promedio calculado.
    if (promedio < 4) {
        estilo_texto = 'text-danger'
        condicion = 'Estudiante reprobado.'
        // console.log('reprobado');
    } else if (promedio < 6) {
        estilo_texto = 'text-success'
        condicion = 'Estudiante aprobado.'
        // console.log('aprobado');
    } else {
        estilo_texto = 'text-primary'
        condicion = 'Estudiante aprobado con nota sobresaliente.'
        // console.log('reprobado sobresaliente');
    }
    mensajeHTML = '<span class="' + estilo_texto + '">' + condicion + '</span>'
    document.getElementById('resultado-condicion').innerHTML = mensajeHTML
}