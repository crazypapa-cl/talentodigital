'use strict'

// Clase Producto.
class Producto {
    // Constructor.
    constructor(nuevoNombre, nuevoValor, nuevaCantidad) {
        this.nombre = nuevoNombre;
        this.valor = nuevoValor;
        this.cantidad = nuevaCantidad;
        this.total = nuevaCantidad * nuevoValor;
    }

    // Método para mostrar el objeto en formato de String.
    toString() {
        return `Nombre: ${this.nombre}, Valor: ${this.valor}, Cantidad: ${this.cantidad}, Total: ${this.total}`;
    }
}

// Clase Inventario.
class Inventario {
    // Constructor.
    constructor() {
        this.productos = [];
    }

    // Método para agregar un producto a la lista de productos.
    agregar(producto) {
        this.productos.push(producto);
    }

    // Método para mostrar la lista de productos en el elemento Div dado.
    mostrarDiv(div) {
        div.innerHTML = "";

        this.productos.forEach((producto) => {
            let nodoBloqueTexto = document.createElement('div')
            let nodoTexto = document.createTextNode(producto.toString())
            nodoBloqueTexto.appendChild(nodoTexto)
            div.appendChild(nodoBloqueTexto);
        });
    }
}

// Inicializar el objeto inventario, inicialmente vacío.
var inventario = new Inventario()

// Crear productos fijos para el inventario.
// NOTA: SÓLO SE UTILIZAN EN LA FUNCIÓN ejemploSpread() QUE APARECE MÁS ABAJO.
// NO INFLUYEN EN EL RESTO DE LAS FUNCIONALIDADES DEL PROGRAMA.
const PRODUCTO_FIJO_01 = new Producto('Gorro', 7500, 8)
const PRODUCTO_FIJO_02 = new Producto('Polera', 11900, 4)
const PRODUCTO_FIJO_03 = new Producto('Polerón', 20000, 6)
const PRODUCTOS_FIJOS = [PRODUCTO_FIJO_01, PRODUCTO_FIJO_02, PRODUCTO_FIJO_03]

// Función para validar el ingreso de datos de un producto.
function validarProducto(nombre, valor, cantidad) {
    let resultadoValidacion = true
    let nodoMensaje = document.getElementById('mensaje')
    let nombreTrimeado = nombre.trim()

    // Vaciar el elemento mensaje.
    nodoMensaje.innerHTML = ''

    // Validar si el nombre esta vacío.
    if (nombreTrimeado.length == 0) {
        resultadoValidacion = false
        let nodoBloqueTexto = document.createElement('div')
        let nodoTexto = document.createTextNode('Ingrese un nombre.')
        nodoBloqueTexto.appendChild(nodoTexto)
        nodoMensaje.appendChild(nodoBloqueTexto)
    }

    // Validar si el valor esta vacío.
    if (valor.length == 0) {
        resultadoValidacion = false
        let nodoBloqueTexto = document.createElement('div')
        let nodoTexto = document.createTextNode('Ingrese un valor.')
        nodoBloqueTexto.appendChild(nodoTexto)
        nodoMensaje.appendChild(nodoBloqueTexto)
    } else if (isNaN(valor)) {
        // Validar si el valor es un número.
        resultadoValidacion = false
        let nodoBloqueTexto = document.createElement('div')
        let nodoTexto = document.createTextNode('Ingrese un valor.')
        nodoBloqueTexto.appendChild(nodoTexto)
        nodoMensaje.appendChild(nodoBloqueTexto)
    }

    // Validar si la cantidad esta vacía.
    if (cantidad.length == 0) {
        resultadoValidacion = false
        let nodoBloqueTexto = document.createElement('div')
        let nodoTexto = document.createTextNode('Ingrese una cantidad.')
        nodoBloqueTexto.appendChild(nodoTexto)
        nodoMensaje.appendChild(nodoBloqueTexto)
    } else if (isNaN(cantidad)) {
        // Validar si la cantidad es un número.
        resultadoValidacion = false
        let nodoBloqueTexto = document.createElement('div')
        let nodoTexto = document.createTextNode('Ingrese una cantidad.')
        nodoBloqueTexto.appendChild(nodoTexto)
        nodoMensaje.appendChild(nodoBloqueTexto)
    }

    // Retornar el resultado de la validación.
    return resultadoValidacion
}

// Función para limpiar todos los campos de entrada
// del formulario para ingresar un producto.
function limpiarFormularioIngresarProducto() {
    document.getElementById('formularioIngresarProducto').reset()
}

// Función para ingresar un nuevo producto al inventario.
function ingresarProductoClick() {
    let nombre = document.getElementById('nombre').value
    let valor = document.getElementById('valor').value
    let cantidad = document.getElementById('cantidad').value
    let validacion = validarProducto(nombre, valor, cantidad)
    if (validacion == true) {
        let nombreTrimeado = nombre.trim()
        let numeroValor = Number(valor)
        let numeroCantidad = Number(cantidad)
        let producto = new Producto(nombreTrimeado, numeroValor, numeroCantidad)
        inventario.agregar(producto)
        limpiarFormularioIngresarProducto()
    }
}

// Función para ejemplificar el uso del operador Spread.
function ejemploSpread() {
    let productosInventario = [...PRODUCTOS_FIJOS, ...inventario.productos]
    console.log('================== EJEMPLO DE USO DEL OPERADOR SPREAD ==================');
    console.log('* Lista total de productos del inventario:');
    for (let productoActual of productosInventario) {
        console.log('- Producto => { ' + productoActual.toString() + ' }');
    }
    console.log('* Fin de la lista.');
}

// Función para mostrar la lista de productos del inventario.
function listarProductosClick() {
    inventario.mostrarDiv(document.getElementById('lista'));
    ejemploSpread()
}