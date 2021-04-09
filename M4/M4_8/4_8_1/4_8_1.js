
var form = new Vue({

    el: '#form',
    data: {
        valor1:'',
        valor2:'',
        radio:[],
        globo:""
    },      
    methods:{

        sumar (){
          this.globo = parseInt(this.valor1)+parseInt(this.valor2)
        }
    }
})