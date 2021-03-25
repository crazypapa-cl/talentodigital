
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
// Obteniendo el Formulario 
var formulario = document.getElementById('formulario')

//tomadno los inputs del formulario
var form  = document.querySelectorAll('#formulario input')
// Obteniendo el DIV para mostrar las alertas 
var alerta = document.getElementById('alerta')


//Declarando expresiones regulares para saber si el texto es digito o contiene un espacio
var expresion = {
    nombre: /^[a-zA-ZÀ-ÿ]{1,40}$/,
    edad: /^\d{1,2}$/
}
console.log('hola')
document.querySelector('html').onclick = function() {
    alert('Alguien presionó algo');
}


/*

console.log(form)
form.forEach(inputs => {
    inputs.addEventListener('keyup',validar)
    inputs.addEventListener('blur',validar)
    alerta.innerHTML=""
    
});

// Declarando el objeto onof para guardar los inputs que estan correctos

var onof={
    nombre: false,
    password: false
}



function validar(e){
alerta.innerHTML=""
alerta.innerHTML=""

    switch(e.target.name){
      
        case 'nombre':
        if(expresion.nombre.test(e.target.value)){
            console.log(e.target.name)
            console.log('No contiene espacios ni digitos ')
            console.log(e.target.style.backgroundColor='#06ab0054')
            e.target.style.backgroundColor='#06ab0054'
            e.target.style.border='solid 4px green'
            alerta.innerHTML=""
            onof.nombre=true
            
        }else{
            console.log('Contiene un espacio o un digito')
            e.target.style.backgroundColor='#480000'
            alerta.innerHTML="<small style='background-color:red; margin-top:50px; padding:10px;'>El campo <b>" +e.target.name.toUpperCase()+"</b>  No puede contener espacios ni números</small>"
            onof.nombre=false
        }
        break;

        case 'password':
            console.log(e.target.name)
            if(expresion.nombre.test(e.target.value)){
                console.log('INPUT EDAD')
                console.log('No contiene espacios digitos ')
                e.target.style.backgroundColor='#06ab0054'
                e.target.style.border='solid 4px green'
                alerta.innerHTML=""
                if(e.target.value=='enterthematrix'){
                    alerta.innerHTML="" 
                    alerta.innerHTML="<small style='background-color:green; color:white; margin-top:50px; padding:10px;'>" +e.target.name.toUpperCase()+"</b> OK</small>"
                    onof.password=true
                }else{
                    alerta.innerHTML=""
                    alerta.innerHTML="<small style='background-color:red; margin-top:50px; padding:10px;'>El campo <b>" +e.target.name.toUpperCase()+"</b>password Incorrecto</small>"
                    onof.password=false
            }
         }

    }
  
 //   console.log(typeof(e.target))
    //Investigando un objeto, cientos de cosas dentro!!
/*for (const property in e) {
    console.log(`${property}: ${e[property]}`);
  }

}

formulario.addEventListener('submit',(e)=>{ 
    e.preventDefault()
    if(formulario.querySelectorAll('input')[0].value == "" && formulario.querySelectorAll('input')[1].value==""){
        document.getElementById('alerta').innerHTML="<small style='background-color:red; margin-top:50px; padding:10px;'>No puedes envíar un formulario vacio</small>"
        
    }else if(onof.nombre && onof.password){
       
        document.getElementById('alerta').innerHTML="<small style='background-color:green; margin-top:50px; padding:10px;'>Parece estar todo Ok</small>"
        setTimeout(function(){location.href ="16_3_1.html"; }, 1000);
    }
   
    //e.preventDefault()
    
})




*/
