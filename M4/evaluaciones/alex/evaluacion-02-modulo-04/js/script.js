// Establecer el uso estricto de JavaScript.
'use strict';

// Componente Lista de Autos
Vue.component(
    'listadeautos',
    {
        props: ['titulo', 'autos', 'categorias'],
        template: '#templateListadeAutos',
        data() {
            return {
                filtro: '',
                mensajeAyudaFiltro: 'Busque por algunos de los ítems presentados'
            }
        },
        methods: {
            obtenerNombreCategoria(valorCategoria) {
                for (let categoria of this.categorias) {
                    if (categoria.valor == valorCategoria) {
                        return categoria.nombre
                    }
                }
                return ''
            },
            solicitarActualizar(indice) {
                this.$emit('solicitud-actualizar', indice)
            },
            eliminar(indice) {
                if (confirm('\u00bfEstá seguro que desea eliminar este elemento?')) {
                    this.autos.splice(indice, 1)
                }
            }
        }
    }
)

// Componente Crear Auto
Vue.component(
    'crearAuto',
    {
        props: ['titulo', 'modoOperacion', 'autos', 'categorias', 'indice'],
        template: '#templateCrearAuto',
        data() {
            return {
                nuevoCodigo: '',
                nuevaMarca: '',
                nuevoModelo: '',
                nuevaCategoria: '',
                nuevoStock: '',
                nuevoPrecio: '',
                ingresoDatos: false,
                listaErrores: [],
                mensajeSePuedeCrear: 'Se puede agregar el nuevo auto.'
            };
        },
        methods: {
            mostrarComponente() {
                this.mostrar = true
            },
            limpiar() {
                this.nuevoCodigo = ''
                this.nuevaMarca = ''
                this.nuevoModelo = ''
                this.nuevaCategoria = ''
                this.nuevoStock = ''
                this.nuevoPrecio = ''
                this.ingresoDatos = false
                this.listaErrores = []
            },
            agregar() {
                this.autos.push(
                    {
                        codigo: this.nuevoCodigo,
                        marca: this.nuevaMarca,
                        modelo: this.nuevoModelo,
                        categoria: this.nuevaCategoria,
                        stock: Number(this.nuevoStock),
                        precio: Number(this.nuevoPrecio)
                    }
                )
                this.limpiar()
                this.$emit('finoperacion')
            },
            cancelar() {
                this.$emit('destruir')
            },
            mostrarErrores() {
                this.ingresoDatos = true
                this.listaErrores = []

                if (this.nuevoCodigo == '') {
                    this.listaErrores.push('El código está en blanco.')
                } else if (this.nuevoCodigo.length < 5) {
                    this.listaErrores.push('El código tiene menos de 5 caracteres.')
                }

                if (this.nuevaMarca == '') {
                    this.listaErrores.push('La marca está en blanco.')
                } else if (this.nuevaMarca.length < 2) {
                    this.listaErrores.push('La marca tiene menos de 2 caracteres.')
                }

                if (this.nuevoModelo == '') {
                    this.listaErrores.push('El modelo está en blanco.')
                }

                if (this.nuevaCategoria == '') {
                    this.listaErrores.push('No ha seleccionado una categoría.')
                }
            }
        }
    }
)

// Componente Actualizar Auto
Vue.component(
    'actualizarAuto',
    {
        props: ['titulo', 'modoOperacion', 'autos', 'categorias', 'indice'],
        template: '#templateActualizarAuto',
        data() {
            return {
                codigo: '',
                marca: '',
                modelo: '',
                categoria: '',
                stock: '',
                precio: '',
                ingresoDatos: false,
                listaErrores: [],
                mensajeSePuedeGrabar: 'Se pueden grabar los datos del auto.'
            };
        },
        methods: {
            limpiar() {
                this.codigo = ''
                this.marca = ''
                this.modelo = ''
                this.categoria = ''
                this.stock = ''
                this.precio = ''
                this.ingresoDatos = false
                this.listaErrores = []
            },
            guardar() {
                this.autos[this.indice].codigo = this.codigo
                this.autos[this.indice].marca = this.marca
                this.autos[this.indice].modelo = this.modelo
                this.autos[this.indice].categoria = this.categoria
                this.autos[this.indice].stock = Number(this.stock)
                this.autos[this.indice].precio = Number(this.precio)
                this.limpiar()
                this.$emit('finoperacion')
            },
            llenar(indice) {
                this.codigo = this.autos[indice].codigo
                this.marca = this.autos[indice].marca
                this.modelo = this.autos[indice].modelo
                this.categoria = this.autos[indice].categoria
                this.stock = this.autos[indice].stock
                this.precio = this.autos[indice].precio
            },
            cancelar() {
                this.limpiar()
                this.$emit('finoperacion')
            },
            mostrarErrores() {
                this.ingresoDatos = true
                this.listaErrores = []

                if (this.codigo == '') {
                    this.listaErrores.push('El código está en blanco.')
                } else if (this.codigo.length < 5) {
                    this.listaErrores.push('El código tiene menos de 5 caracteres.')
                }

                if (this.marca == '') {
                    this.listaErrores.push('La marca está en blanco.')
                } else if (this.marca.length < 2) {
                    this.listaErrores.push('La marca tiene menos de 2 caracteres.')
                }

                if (this.modelo == '') {
                    this.listaErrores.push('El modelo está en blanco.')
                }

                if (this.categoria == '') {
                    this.listaErrores.push('No ha seleccionado una categoría.')
                }
            }
        }
    }
)

// Aplicación Vue
let app = new Vue({
    el: '#app',
    data: {
        tituloAplicacion: 'Administrador de productos',

        tituloBotonAgregarAuto: 'Agregar Auto',

        // Lista de Categorías de Autos
        listaCategorias: [
            {
                nombre: 'Seleccione una categoria',
                valor: ''
            },
            {
                nombre: 'Sedán',
                valor: 'sedan'
            },
            {
                nombre: 'Hatchback',
                valor: 'hatchback'
            },
            {
                nombre: 'SUV',
                valor: 'suv'
            },
            {
                nombre: 'Familiar',
                valor: 'familiar'
            },
            {
                nombre: 'Deportivos o Coupé',
                valor: 'deportivos-coupe'
            },
            {
                nombre: 'Minivan',
                valor: 'minivan'
            },
            {
                nombre: 'Pick Up',
                valor: 'pick-up'
            },
            {
                nombre: 'City Car',
                valor: 'city-car'
            },
            {
                nombre: 'Camioneta',
                valor: 'camioneta'
            },
            {
                nombre: 'Jeep',
                valor: 'jeep'
            }
        ],

        // Lista de Autos
        listaAutos: [
            {
                codigo: '00001',
                marca: 'Volkswagen',
                modelo: 'Fox',
                categoria: 'hatchback',
                stock: 50,
                precio: 7500000
            },
            {
                codigo: '00002',
                marca: 'Peugeot',
                modelo: '3008',
                categoria: 'suv',
                stock: 45,
                precio: 1200000
            },
            {
                codigo: '00003',
                marca: 'Citroen',
                modelo: 'CX',
                categoria: 'hatchback',
                stock: 55,
                precio: 9500000
            },
            {
                codigo: '00004',
                marca: 'Dodge',
                modelo: 'Suburban',
                categoria: 'suv',
                stock: 60,
                precio: 1500000
            },
            {
                codigo: '00005',
                marca: 'Fiat',
                modelo: '500',
                categoria: 'city-car',
                stock: 38,
                precio: 8000000
            }
        ],
        
        // Lista de Componentes de la App
        componentesFormulario: [
            {
                componente: 'crearAuto',
                titulo: 'Agregar Auto'
            },
            {
                componente: 'actualizarAuto',
                titulo: 'Actualizar Auto'
            },
            {
                componente: 'listadeautos',
                titulo: 'Listado de Autos'
            }
        ],

        // Componente Actual
        componenteFormularioActual: undefined,

        // Índice actual a actualizar del arreglo o lista de autos.
        // VALORES: -1: Agregar un nuevo auto. Distinto a -1: Número de índice del arreglo de autos.
        actualizandoIndice: -1,

        // Modo de operación actual.
        // VALORES: '': Ninguno. 'agregarAuto': Agregar un nuevo auto. 'actualizarAuto': Actualizar un auto seleccionado.
        modoOperacion: ''
    },
    methods: {
        // Método para solicitar agregar un nuevo auto.
        solicitarAgregarAuto() {
            this.componenteFormularioActual = this.componentesFormulario[0]
            this.actualizandoIndice = -1
            this.modoOperacion = 'agregarAuto'
        },

        // Método para cargar el componente Actualizar Auto.
        cargarComponenteActualizarAuto(indice) {
            this.componenteFormularioActual = this.componentesFormulario[1]
            this.actualizandoIndice = indice
            this.modoOperacion = 'actualizarAuto'
            this.$refs.componenteActualizarAuto.llenar(indice)
        },

        // Método para cargar el componente Agregar Auto.
        cargarComponenteAgregarAuto(evento) {
            this.$refs.componenteCrearAuto.mostrarComponente()
        },

        // Método para destruir el componente actual.
        destruirComponenteFormularioActual() {
            this.componenteFormularioActual = undefined
            this.actualizandoIndice = -1;
            this.modoOperacion = ''
        },
        
        // Método para ejecutar ciertas acciones al finalizar una operación realizada.
        operacionFinalizada() {
            this.destruirComponenteFormularioActual()
        }
    },
    mounted() {
        // Al cargar completamente la aplicación, destruir el componente actual.
        this.destruirComponenteFormularioActual()
    }
})