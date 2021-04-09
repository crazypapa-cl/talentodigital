
var form = new Vue({

    el: '#form',
    data: {
        nombre:"",
        edad:"",
        formNombre:true,
        formEdad:true,
        error :'error',
        ok : true,
        globo : ""
        
    },      
    methods:{
        validar : function (){
            this.globo=""
            if(this.nombre===''){
                console.log(' introdusca un dato porfavor')
                this.globo="El input Nombre no puede estar vacio"
            }else{
                this.globo="El campo nombre no esta vacio, continue con el campo edad"
                this.formNombre=false
                if(this.edad===''){
                    console.log('El Campo edad esta vacio, intrdoduca una edad')
                    this.globo='El Campo edad esta vacio, intrdoduca una edad'
                    this.error="true"
                }else if(isNaN(this.edad)){

                    this.globo="El campo edad solo puede contener numeros."
                    this.formEdad=true
                }else{
                    this.formEdad=false
                    this.globo="Formulario enviado con exito"
                    
                }
            }

           
            
        }
    }

})