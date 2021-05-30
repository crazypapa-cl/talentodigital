"use strict"

// Función calcularArea() - Calcular el área del triángulo,
// dada la base y la altura ingresadas.
function calcularArea() {
    // Declarar variables.
    let mensaje, base, altura, numeroBase, numeroAltura, area

    // Leer los datos de entrada.
    base = document.getElementById('base').value
    altura = document.getElementById('altura').value

    // Validar los datos de entrada.
    if (base == '' || altura == '') {
        mensaje = 'Debe ingresar los siguientes datos faltantes:'
        mensaje += (base == '')? '\n- Base' : ''
        mensaje += (altura == '')? '\n- Altura' : ''
        alert(mensaje)
    } else {
        // Convertir los datos de entrada a números.
        numeroBase = Number(base)
        numeroAltura = Number(altura)

        // Calcular el área, utilizando los datos.
        area = base * altura / 2

        // Mostrar la área calculada en la ventana del navegador.
        document.getElementById('resultado-area').innerHTML = '<span style="font-weight: bold;">' + area + ' cms.</span>'
    }
}

// Función calcularPerimetro() - Calcular el perímetro del triángulo,
// dados los lados ingresadas.
function calcularPerimetro() {
    // Declarar variables.
    let mensaje, base, lado1, lado2, numeroBase, numeroLado1, numeroLado2, perimetro

    // Ingresar los datos de entrada.
    base = document.getElementById('base').value
    lado1 = document.getElementById('lado1').value
    lado2 = document.getElementById('lado2').value

    // Validar los datos de entrada.
    if (base == '' || lado1 == '' || lado2 == '') {
        mensaje = 'Debe ingresar los siguientes datos faltantes:'
        mensaje += (base == '')? '\n- Base' : ''
        mensaje += (lado1 == '')? '\n- Lado 1' : ''
        mensaje += (lado2 == '')? '\n- Lado 2' : ''
        alert(mensaje)
    } else {
        // Convertir los datos de entrada a números.
        numeroBase = Number(base)
        numeroLado1 = Number(lado1)
        numeroLado2 = Number(lado2)

        // Calcular el perímetro, utilizando los datos.
        perimetro = numeroBase + numeroLado1 + numeroLado2

        // Mostrar el perímetro calculada en la ventana del navegador.
        document.getElementById('resultado-perimetro').innerHTML = '<span style="font-weight: bold;">' + perimetro + ' cms.</span>'
    }
}