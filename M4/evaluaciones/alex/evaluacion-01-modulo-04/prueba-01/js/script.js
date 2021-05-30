// Declarar el uso estricto del lenguaje JavaScript.
'use strict'

// Crear una aplicación Vue.
var app = new Vue({
    el: '#app', // Apuntar al elemento HTML de id="app".
    data: { // Sección Modelo, para almacenar los datos.
        // Arreglo de objetos que representan una imagen.
        // Para cada objeto imagen, se mantiene su valor, nombre, descripción
        // y la ruta local donde se guarda la imagen misma.
        imagenes: [
            {
                valor: 'guitarra',
                nombre: 'Guitarra',
                descripcion: 'Cuerdas clásicas que vibran en acordes dichosos.',
                ruta: 'img/guitarra.jpg'
            },
            {
                valor: 'bajo',
                nombre: 'Bajo',
                descripcion: 'Cuerdas graves para acompañar en tonos profundos.',
                ruta: 'img/bajo.jpg'
            },
            {
                valor: 'bateria',
                nombre: 'Batería',
                descripcion: 'Golpes sonoros para marcar ritmos y compases.',
                ruta: 'img/bateria.jpg'
            },
            {
                valor: 'piano',
                nombre: 'Piano',
                descripcion: 'Teclas tocadas con detallada y perfecta conjunción.',
                ruta: 'img/piano.jpg'
            },
            {
                valor: 'voz',
                nombre: 'Voz',
                descripcion: 'Instrumento natural que genera armonías en el ambiente.',
                ruta: 'img/voz.jpg'
            }
        ],

        // Objeto que mantiene la imagen seleccionada por el usuario.
        // Inicialmente, está vacío.
        imagenSeleccionada: ''
    },
    computed: { // Sección Computed, para hacer los cálculos en base a los datos.
        // Método para calcular y retornar la descripción de la imagen seleccinada.
        descripcionImagen() {
            // Se recorre la lista de imágenes.
            for (let imagen of this.imagenes) {
                // Si la imagen actual recorrida coincide con la imagen seleccionada,
                // se retorna la descripción de esta imagen.
                if (imagen.valor == this.imagenSeleccionada) {
                    return imagen.descripcion
                }
            }
            // En caso de no encontrar la imagen seleccionada en la lista de imágenes,
            // se retorna vacío.
            return ''
        },

        // Método para calcular y retornar la ruta de la imagen seleccinada.
        rutaImagen() {
            // Se recorre la lista de imágenes.
            for (let imagen of this.imagenes) {
                // Si la imagen actual recorrida coincide con la imagen seleccionada,
                // se retorna la ruta de esta imagen.
                if (imagen.valor == this.imagenSeleccionada) {
                    return imagen.ruta
                }
            }
            // En caso de no encontrar la imagen seleccionada en la lista de imágenes,
            // se retorna vacío.
            return ''
        },

        // Método para calcular y retornar el nombre de la imagen seleccinada.
        nombreImagen() {
            // Se recorre la lista de imágenes.
            for (let imagen of this.imagenes) {
                // Si la imagen actual recorrida coincide con la imagen seleccionada,
                // se retorna el nombre de esta imagen.
                if (imagen.valor == this.imagenSeleccionada) {
                    return imagen.nombre
                }
            }
            // En caso de no encontrar la imagen seleccionada en la lista de imágenes,
            // se retorna vacío.
            return ''
        }
    }
})