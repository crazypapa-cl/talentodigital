
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
// Obteniendo el Formulario 


//tomadno los inputs del formulario
var form  = document.querySelectorAll('#formulario input')
// Obteniendo el DIV para mostrar las alertas 
var alerta = document.getElementById('alerta')
var arriba = 0
var derecha=0


var btn = document.createElement('button')
btn.style.top='0px'
btn.style.left='0px'
 document.querySelector('html').onkeyup = function (e){
  console.log('hola  ' + e.key)


  switch(e.key){
    case 'ArrowUp':
      arriba+=10
      btn.style.top=btn.style.top= arriba+'px'
      console.log(btn.style.top )
      console.log(e.key)
      console.log('Flecha Pa ARRIBA')
     
      break;

      case 'ArrowDown':
        console.log('Flecha Pa ABAJO')
       arriba-=10
        btn.style.top=btn.style.top= arriba+'px'
        console.log(btn.style.top )
        console.log(e.key)
      break;

      case 'ArrowLeft':
        console.log('Flecha Pa IZQUIERDA')
        derecha-=10
        btn.style.top=btn.style.left= derecha+'px'
        console.log(btn.style.left )
        console.log(e.key)
        break;

      case 'ArrowRight':
          console.log('Flecha Pa DERECHA')
          derecha+=10
          btn.style.top=btn.style.right= derecha+'px'
          console.log(btn.style.right )
          console.log(e.key)
          break
      }

 }

 

console.log(btn.style)
btn.style="background-color:red; width:200px; font-size:50px; position:absolute"
btn.innerText="<!W!>"
sandbox.appendChild(btn)
btn.onclick = function(e){
    console.log(e)
}


 