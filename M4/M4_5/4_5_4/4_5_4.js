
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')


var app = new Vue({

    el: '#app',
    data: {
        clicks:0,
        color:"",
        colores:['red','blue','green','white','orange','pink']
    },      
    methods:{
            contar : function(){
                this.clicks++
                console.log('gola')
                console.log(this.colores.length)
                console.log(this.clicks)
                if(this.clicks < this.colores.length){
                    this.color=this.colores[this.clicks]
                }else{
                    this.clicks=0
                }
              
            }

        
        }

})

