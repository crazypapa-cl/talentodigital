console.log(vocales)
var app= new Vue({
    el:'#app',
    data:{estilos:['blanco','negro','amarillo','verde','azul'],
        numero : function(){
            var azar = Math.floor(Math.random()*4)
            return this.estilos[azar]
        },
        mostrar:false,
        validar : function(){
           
            }
        }
})

