
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
var simbolo=document.getElementById('simbol')
var visor = document.getElementById('hora')
var div = document.querySelector('div')
//console.log(simbolo.textContent)
//Investigando un objeto, cientos de cosas dentro!!
/*for (const property in div) {
    console.log(`${property}: ${div[property]}`);
  }*/
//Declarando Array con 5 palabras
var palabras = ['Perro','Mago','Estrella','Animales','Cazardor']

//Creando el boton y poniendolo a la escuha del onClick, asigando funcion modificar()
var btn = document.querySelector('button')
var verdad = true;

btn.onclick= function(e){
    //console.log(e)
    //e.preventDefault()
    if(verdad){
        for(i=0; i<=4; i++){
            let azar = Math.floor(Math.random()*(0-4)+4);
            console.log(azar)
            let div = document.createElement('div')
            div.setAttribute('style','margin-top:30px; text-align:left')
            div.innerText=palabras[azar]
            sandbox.appendChild(div)
        }
        verdad=false
    }else{
        console.log(sandbox.querySelectorAll('div'))
        var borrar = sandbox.querySelectorAll('div')
        sandbox.removeChild(borrar[0])
        sandbox.removeChild(borrar[1])
        sandbox.removeChild(borrar[2])
        sandbox.removeChild(borrar[3])
        sandbox.removeChild(borrar[4])
        verdad=true
      
    }
   
   
 
  
   
   

}







