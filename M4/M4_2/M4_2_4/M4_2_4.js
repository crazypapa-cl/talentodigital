
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')


var app= new Vue({
    el:'#app',
    data:{
        fotos:['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg'],
        size : '400px',
        numero : function(){
            var azar = Math.floor(Math.random()*4)
            console.log(azar)
            return this.fotos[azar]
        }

        }
})
