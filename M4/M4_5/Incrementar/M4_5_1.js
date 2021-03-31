
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')


var app = new Vue({

    el: '#app',
    data: {
        contador:""
    },
       
    methods:{
        contar:function(){
            this.contador++
        }
    }
})

