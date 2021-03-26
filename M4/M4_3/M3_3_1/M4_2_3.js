
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
var emociones = ['desconfiado','impresionado','enamorado','aburrido']


var app= new Vue({
    el:'#app',
    data:{estilos:['blanco','negro','amarillo','verde','azul'],
        numero : function(){
            var azar = Math.floor(Math.random()*4)
            return this.estilos[azar]
        }
    }
})