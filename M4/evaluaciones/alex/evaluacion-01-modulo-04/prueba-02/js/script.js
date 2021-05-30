// Declarar el uso estricto del lenguaje JavaScript.
'use strict'

// Crear una aplicación Vue.
var app = new Vue({
    el: '#app', // Apuntar al elemento HTML de id="app".
    data: { // Sección Modelo, para almacenar los datos.
        // Arreglo de objetos que representan una imagen.
        // Para cada objeto imagen, se mantiene su descripción
        // y la ruta local donde se guarda la imagen misma.
        imagenes: [
            {
                descripcion: 'Basquetbolista',
                ruta: 'img/basquetbolista.jpg'
            },
            {
                descripcion: 'Comida China',
                ruta: 'img/comida-china.png'
            },
            {
                descripcion: 'Hongos',
                ruta: 'img/hongos.png'
            },
            {
                descripcion: 'Mona Lisa',
                ruta: 'img/monalisa.jpg'
            },
            {
                descripcion: 'Mono de Nieve',
                ruta: 'img/mono-nieve.png'
            }
        ],

        // Arreglo que mantiene las imagenes seleccionadas por el usuario.
        // Inicialmente, está vacío.
        imagenesSeleccionadas: []
    }
})