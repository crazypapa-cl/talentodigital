
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
var emociones = ['desconfiado','impresionado','enamorado','aburrido']


var app= new Vue({
    el:'#app',
    data:{
        tipos:[
        {emosion:['desconfiado','impresionado', 'enamorado','aburrido'],
         azar : function (){
           var numero = Math.floor(Math.random()*emociones.length)
                return this.emosion[numero]
            }
        }

        ]
    }
})
