var btn = document.getElementById("tirar")
console.log(btn)
var body = document.body
var uno = document.getElementById('01')
var vivo = false
console.log(btn)

function hola()
{
    alert('hola')
}
btn.addEventListener('click', createNode, true)

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
    if (vivo){
        clearNode()
        
    }else{
        vivo=true
    }
    const tiradas = tirar(3);
    console.log(tiradas.length)
    function animatrix(i){
        const newImg = document.createElement('img');
        newImg.setAttribute('class','animar')
        uno.appendChild(newImg).setAttribute('src',`img/${tiradas[i]}.jpg`)
        } var i = 0 
   /* for(var i = 0; i<tiradas.length; i++){
            
        animatrix(i)*/
        var tiempo = setInterval(function(){
       
            if( i < 3){
                
                animatrix(i)
                console.log(i)
                i++

            }else{
                i=0
                console.log('pasando por else')
                clearInterval(tiempo)
            }
       
        },200)
}
    
    /*tiradas.forEach(element=>{
    
    newImg.setAttribute('class','animar','animar2')
    uno.appendChild(newImg).setAttribute('src',`img/${element}.jpg`)
   setTimeout(newImg.setAttribute('class','animar2'), 5000);

    })*/
function clearNode(){
    uno.children[0].remove()
    uno.children[1].remove()
    uno.children[0].remove()

}
console.log(body)
var nav = '<nav class="flex-sm-column flex-sm-row flex-md-row nav-sm nav-md "><img src="hand_white.svg" class="logo"><div class="flex-md-row flex-column-md  titulo-box-md"><h1 class="titulo-sm ">Tarot</h1><h3 class="subtitulo-sm subtitulo-md">Online</h3></div><ul class="flex-sm-column nav-md nav-mdx-row typo-meta "><li><a href="tirada.html">Tirada</a></li><li><a>Arcano</a></li><li><a href="galeria.html">Galeria</a></li><li><a href="index.html">HOME</a></li></ul></nav>'
