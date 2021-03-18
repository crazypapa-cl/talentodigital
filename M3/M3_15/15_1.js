
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
//Investigando un objeto, cientos de cosas dentro!!
/*for (const property in div) {
    console.log(`${property}: ${div[property]}`);
  }*/
//
var form = document.querySelector('form')
var verdad = true;

form.addEventListener('submit',(e)=>{ 
    e.preventDefault()
    let texto = form.querySelector('input').value
    if(texto !== ''){
        document.getElementById('alerta').innerHTML="ok el input tiene texto"
        
    }else{
        document.getElementById('alerta').innerHTML="el input esta vacio"
    }
   
    //e.preventDefault()
    
})








