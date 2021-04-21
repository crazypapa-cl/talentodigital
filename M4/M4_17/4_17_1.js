// Instanciando Nuevo componente template para los productos.

/*Vue.component('listar-stock',{
    template :`
    <table class="table">
      <thead>
         <th>Foto</th>
         <th>CODE</th>
         <th>PRODUCTO</th>
         <th>Precio</th>
         <th>EDITAR</th>
      </thead>
      <tbody>
         <tr v-for="producto in productos">
            <td><img  :src="producto.src"></td>
            <td><input type="checkbox" v-model="producto.selected"></td>
            <td>{{producto.name}}</td>
            <td>{{producto.price}}</td>
            <td><button class="btn btn-danger" value="eliminar" @click="eliminar(producto)">X</button></td>
         </tr>
      </tbody>
   </table>

    `,
    props:['productos'],
    methods:{
        eliminar:function(producto){
            console.log(this.productos.indexOf(producto))
            this.productos.splice(this.productos.indexOf(producto),1)
        }
    }

})/*

})*/
Vue.component('listar-db',{
    productos :  "HOLA" ,
    template:`<table class="table">
    <thead>
        <th>{{productos}}</th>
       <th>Foto</th>
       <th>CODE</th>
       <th>PRODUCTO</th>
       <th>Precio</th>
       <th>EDITAR</th>
    </thead>
    <tbody>
       <tr v-for="producto in productos">
          <td><img  :src="producto.src"></td>
          <td><input type="checkbox" v-model="producto.selected"></td>
          <td>{{producto.name}}</td>
          <td>{{producto.price}}</td>
          <td><button class="btn btn-danger" value="eliminar" @click="eliminar(producto)">X</button></td>
       </tr>
    </tbody>
 </table>`,
 methods:{
    eliminar:function(producto){
        console.log(this.productos.indexOf(producto))
        this.productos.splice(this.productos.indexOf(producto),1)
    }
 }
})

Vue.component('nav-vue',{
    prorps:['productos'],
    components: {
        home: {
            template: "<p>Home</p>"
        },
        carrers: {
            template:`<listar-db :productos=productos></listar-db>`
        },
        about: {
            template: "<input type='text'>"
        }
    }
    ,
    data:function () {
    return {
            current:'home'
            }
    },
    
    template:` 
    <div>
    <button @click="switchComponent('home')">Stock</button>
    <button @click="switchComponent('about')">Venta</button>
    <button @click="switchComponent('carrers')">Editar</button>
    <hr></hr>
    <keep-alive>
    <components v-bind:is="current"></components>
    </keep-alive>
    </div>`,
    methods:{
        switchComponent(value) {
            this.current = value
        }
   
    }
})

var form = new Vue({
    el: '#listar',
    data : {
        productos:[
            {name:'Papas',src:"./papas.png", price:350, selected:false},
            {name:'Tomates',src:"./tomates.png", price:700, selected:true},
            {name:'Choclo',src:"./choclo.png", price:100, selected:false}
            ]
    },
    template:`
    <div>
    <nav-vue :productos=productos>
    </nav-vue>
    </div>
    `    
   
})