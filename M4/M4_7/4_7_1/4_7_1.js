var app = new Vue({

    el: '#app',
    data: {
        valor :"",
        error :false,
        ok : true,
        globo : ""
        
    },      
    methods:{
        validar : function (){
            if(this.valor===''){
                console.log(' introdusca un dato porfavor')
                this.globo="El input no puede estar vacio"
            }else{
                this.globo="Todo Ok el input no esta vacio"
            }
        }
    }

})

