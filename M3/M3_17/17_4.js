
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
// Obteniendo el Formulario 


//tomadno los inputs del formulario
var form  = document.querySelectorAll('#formulario input')
// Obteniendo el DIV para mostrar las alertas
 
 document.querySelector('html').onkeyup = function (e){
  console.log('hola ' + e.key)
  if(e.key=='ñ'){
    sandbox.innerHTML="<h1 style='font-size:72px'>Ñ</h1>"

  }

 }


 