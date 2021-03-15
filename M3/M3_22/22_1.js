
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
var btn = document.getElementById('btn')
const formulario = document.getElementById('formulario')
const alerta = document.getElementById('alerta')
const inventario=document.getElementById('inventario')
const lista=document.getElementById('lista')

console.log(inventario)
console.log(lista)
console.log(alerta)
//Tomando Control de todos los inputs dentro del formulario, array de inputs.
const inputs = document.querySelectorAll('#formulario input') 
//Testiando si la conexion se establece, usando console.log
console.log(formulario)
console.log(inputs)
var db=[]

// Creando Objeto De expresiones regluares, usando const pues no seran modificados, uso como una pequeña DB.
const expresiones = {
// las expresiones regulares son usadas como metodo de validacion
    textos:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    valor:/^\d{1,6}$/, //Mino 4 digitos maximo 6 
    cantidad:/^\d{1,3}$/ // 1 a 3 digitos.
}
// Declaracion de Objeto inputs para validar si todos campos son validos.
var campos = {
    nombre: false,
    valor: false,
    cantidad: false
}

//Creando Classe Procuto
class producto {
    constructor(nombre,valor,cantidad){
        this.nombre = nombre,
        this.valor = valor,
        this.cantidad = cantidad
    }

        total(){
           return`
           <b>Nombre:</b>${this.nombre} <br>
           <b>Valor:</b>${this.valor} <br>
           <b>Cantidad:</b>${this.cantidad} <br>
           <b>Total:</b>${this.cantidad*this.valor} <br>
           `
        }
    
}



//funcion flecha Js6 que valida los datos



const validarforumario = (e)=>{
    switch(e.target.name){
        case 'nombre':
            if(expresiones.textos.test(e.target.value)){
                console.log('Es solo texto')
                console.log(e.target.name)
                document.getElementById('nombre').classList.remove('invalido')
                document.getElementById('nombre').classList.add('valido')
                campos['nombre'] = true
                alerta.classList.remove('alerta')
                alerta.classList.add('off')
                alerta.innerHTML=''
            }else{
                document.getElementById('nombre').classList.remove('valido')
                document.getElementById('nombre').classList.add('invalido')
                campos['nombre']= false
                alerta.classList.add('error')
                alerta.classList.remove('off')
                alerta.innerHTML='El campo : '+e.target.name+' no acepta digitos'
            }
            console.log(campos.nombre)
        break;
        case 'valor':
            if(expresiones.valor.test(e.target.value)){
                console.log('Es solo Numeros')
                console.log(e.target.name)
                document.getElementById('valor').classList.remove('invalido')
                document.getElementById('valor').classList.add('valido')
                campos['valor'] = true
                alerta.classList.remove('alerta')
                alerta.classList.add('off')
                alerta.innerHTML=''
                
            }else{
                console.log('no es un numero')
                document.getElementById('valor').classList.remove('valido')
                document.getElementById('valor').classList.add('invalido')
                campos['valor'] = false
                alerta.classList.add('error')
                alerta.classList.remove('off')
                alerta.innerHTML='El campo : '+e.target.name+' es incorrecto'
            }
            
        break;
        case 'cantidad':
            if(expresiones.cantidad.test(e.target.value)){
                console.log('Es solo Numeros')
                console.log(e.target.name)
                document.getElementById('cantidad').classList.remove('invalido')
                document.getElementById('cantidad').classList.add('valido')
                alerta.classList.remove('alerta')
                alerta.classList.add('off')
                alerta.innerHTML=''
                campos['cantidad'] = true
            }else{
                console.log('no es un numero')
                document.getElementById('cantidad').classList.remove('valido')
                document.getElementById('cantidad').classList.add('invalido')
                campos['cantidad'] = false
                alerta.classList.add('error')
                alerta.classList.remove('off')
                alerta.innerHTML='El campo : '+e.target.name+' es incorrecto'
            }
            
        break;
    }
}
//Itera los inputs del formulario y escucha el evento tecla arriba, ejecutando la funcion validarformulario, tambien blur que es hacer clic fueradel formulario.

inputs.forEach((inputs)=>{
    inputs.addEventListener('keyup',validarforumario)
    inputs.addEventListener('blur',validarforumario)
});

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(campos.nombre && campos.valor && campos.cantidad){
        var ingreso=[]
        inputs.forEach((inputs)=>{
            ingreso.push(inputs.value)
        });
        var nuevoProducto = new producto(ingreso[0],ingreso[1],ingreso[2])
        inventario.insertAdjacentHTML('beforeend','<div>'+nuevoProducto.total()+'</div>');
        console.log(ingreso[2])
        db.push(nuevoProducto)
        listar()
    

        formulario.reset()
        console.log('todos los campos son correctos')
        alert('Nuevo Producto Ingresado')
        
        

    }else{
        alert('hay campos incorrectos')
    }
})

function listar(){
    lista.innerHTML=""
    for(var i=0; i<= db.length; i++){
        lista.insertAdjacentHTML('beforeend',db[i])
       
    }
}


