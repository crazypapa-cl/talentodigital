
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')


var app = new Vue({

    el: '#app',
    data: {
        nombre:"",
        sueldo :0
    },      
    methods:{
           
            AFP : function (){
                var cotiza=10
                var salud = 7
                var porciento = cotiza + salud
                console.log(this.sueldo -  this.sueldo*porciento/100)
               return this.sueldo -  this.sueldo*porciento/100
                
            }
        
        }

})

