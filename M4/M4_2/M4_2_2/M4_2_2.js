
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
var emociones = ['desconfiado','impresionado','enamorado','aburrido']


var app= new Vue({
    el:'#app',
    data:{
        tipos:
        [
         {         
        foto1:'01.jpg',
        foto2:'02.jpg',
        foto3:'03.jpg',
        foto4:'04.jpg',
        foto5:'05.jpg',
        size : '400px'
        }
        ]
    }
})
