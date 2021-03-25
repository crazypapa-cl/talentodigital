
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
var emociones = ['desconfiado','impresionado','enamorado','aburrido']
function azar(){
 return Math.floor(Math.random()*emociones.length)
}

console.log(azar())

var app= new Vue({
    el:'#app',
    data:{
        tipos:[
        {emosion: 'desconfiado'},
        {emosion: 'impresionado'},
        {emosion: 'enamorado'},
        {emosion: 'aburrido'}
        ]
    }
})
