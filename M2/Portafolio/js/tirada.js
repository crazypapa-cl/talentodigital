
var body = document.body
var uno = document.getElementById('01')


/*or (const property in body) {
    console.log(`${property}: ${body[property]}`);
  }
*/
/*for(i = 0; i < 3; i++ ){
    
    var newImg = document.createElement('img')
    uno.appendChild(newImg).setAttribute('src',`img/${i}.jpg`);
}*/


function tirar(cartas){
    const numero = Array.from({length:22},v=>(Math.floor(Math.random()*22)))
    console.log(numero)
    const numeroUnico = [... new Set(numero)]
    console.log(numeroUnico)
     const tirada = numeroUnico.slice(0,cartas);
    return tirada
}



function createNode(){

    const tiradas = tirar(3);
    console.log(tiradas)
    
    tiradas.forEach(element=>{
    const newImg = document.createElement('img');
    newImg.setAttribute('class','animar','animar2')
    uno.appendChild(newImg).setAttribute('src',`img/${element}.jpg`)
   /* setTimeout(newImg.setAttribute('class','animar2'), 5000);*/

    })
} 

console.log(createNode())