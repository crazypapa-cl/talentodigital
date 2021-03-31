
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')


var app = new Vue({

    el: '#app',
    data: {
        contador: "0",
        suma:"0"
    },      
    methods:{
    
        today : function (){
            var fecha = new Date()
            var hora = fecha.getHours()
            var minutos = fecha.getMinutes()
            var segundos = fecha.getSeconds()
            this.contador = hora +":"+ minutos +":"+ segundos
            this.suma = hora+minutos+segundos
        }
    }
})

