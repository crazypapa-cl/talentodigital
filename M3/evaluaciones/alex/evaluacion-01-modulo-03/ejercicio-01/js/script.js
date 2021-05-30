"use strict"

// Función limpiarFormulario() - Limpiar todos los campos de entrada del formulario.
function limpiarFormulario() {
    document.getElementsByName('formularioSimulador')[0].reset()
}

// Función calcularCompra() - Realiza la simulación de compra de los productos.
function calcularCompra() {
    // Declarar variables.
    let mensaje, numeroPrecioProducto1, numeroPrecioProducto2, numeroPrecioProducto3, numeroPrecioProducto4, cantidadProducto1, cantidadProducto2, cantidadProducto3, cantidadProducto4, numeroCantidadProducto1, numeroCantidadProducto2, numeroCantidadProducto3, numeroCantidadProducto4, descuento, precioNeto, precioNetoMinimoParaDescuento, precioNetoConDescuento, precioTotalConIva, subtotalNetoProducto1, subtotalNetoProducto2, subtotalNetoProducto3, subtotalNetoProducto4, textoDescuento, textoPrecioNeto, textoPrecioNetoConDescuento, textoPrecioTotalConIva

    // Leer los datos de entrada.
    numeroPrecioProducto1 = 150000
    numeroPrecioProducto2 = 30000
    numeroPrecioProducto3 = 15000
    numeroPrecioProducto4 = 20000
    cantidadProducto1 = document.getElementById('cantidad1').value
    cantidadProducto2 = document.getElementById('cantidad2').value
    cantidadProducto3 = document.getElementById('cantidad3').value
    cantidadProducto4 = document.getElementById('cantidad4').value

    // Validar los datos de entrada.
    if (cantidadProducto1 == '' || cantidadProducto2 == '' || cantidadProducto3 == '' || cantidadProducto4 == '') {
        mensaje = 'Debe ingresar los siguientes datos faltantes:'
        mensaje += (cantidadProducto1 == '')? '\n- Cantidad del Producto 1' : ''
        mensaje += (cantidadProducto2 == '')? '\n- Cantidad del Producto 2' : ''
        mensaje += (cantidadProducto3 == '')? '\n- Cantidad del Producto 3' : ''
        mensaje += (cantidadProducto4 == '')? '\n- Cantidad del Producto 4' : ''
        alert(mensaje)
    } else {
        // Convertir los datos de entrada a números.
        numeroCantidadProducto1 = Number(cantidadProducto1)
        numeroCantidadProducto2 = Number(cantidadProducto2)
        numeroCantidadProducto3 = Number(cantidadProducto3)
        numeroCantidadProducto4 = Number(cantidadProducto4)

        // Calcular el precio neto de la compra.
        subtotalNetoProducto1 = numeroPrecioProducto1 * numeroCantidadProducto1
        subtotalNetoProducto2 = numeroPrecioProducto2 * numeroCantidadProducto2
        subtotalNetoProducto3 = numeroPrecioProducto3 * numeroCantidadProducto3
        subtotalNetoProducto4 = numeroPrecioProducto4 * numeroCantidadProducto4
        precioNeto = subtotalNetoProducto1 + subtotalNetoProducto2 + subtotalNetoProducto3 + subtotalNetoProducto4
        textoPrecioNeto = '$ ' + precioNeto

        // Mostrar el precio neto en la ventana del navegador.
        document.getElementById('precioNeto').value = textoPrecioNeto

        // Calcular el descuento de la compra, si su precio neto es mayor a $ 1.000.000.
        precioNetoMinimoParaDescuento = 1000000
        if (precioNeto > precioNetoMinimoParaDescuento) {
            descuento = precioNeto * 0.15
            descuento = Math.ceil(descuento)
            textoDescuento = '$ ' + descuento
        } else {
            descuento = 0
            textoDescuento = 'No se aplica descuento'
        }

        // Mostrar el descuento en la ventana del navegador.
        document.getElementById('descuento').value = textoDescuento

        // Calcular el precio neto con descuento de la compra.
        precioNetoConDescuento = precioNeto - descuento
        if (descuento == 0) {
            textoPrecioNetoConDescuento = 'No se aplica descuento'
        } else {
            textoPrecioNetoConDescuento = '$ ' + precioNetoConDescuento
        }

        // Mostrar el precio neto con descuento en la ventana del navegador.
        document.getElementById('precioNetoConDescuento').value = textoPrecioNetoConDescuento

        // Calcular el precio total con IVA de la compra.
        precioTotalConIva = precioNetoConDescuento * 1.19
        precioTotalConIva = Math.ceil(precioTotalConIva)
        textoPrecioTotalConIva = '$ ' + precioTotalConIva

        // Mostrar el precio total con IVA en la ventana del navegador.
        document.getElementById('precioTotalConIva').value = textoPrecioTotalConIva
    }
}