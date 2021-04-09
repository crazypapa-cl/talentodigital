
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')


var app = new Vue({

    el: '#app',
    data: {
        palabra:"",
        repetir: ""
    },      
    methods:{
           
        repetidor : function(){
            var cantidad = parseInt(this.repetir)    
            console.log(cantidad) 
               this.palabra += this.palabra
            
        }

        
        }

})

