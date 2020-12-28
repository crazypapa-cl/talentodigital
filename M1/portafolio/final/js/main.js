let any = document.getElementById("anima");
let txt = document.getElementById("text");
let wizar = document.getElementById("mago");
let input = document.getElementById("input");
console.log(wizar)
console.log(any)




function write(){
    any.innerHTML=suerte()
}


function suerte(){

   return Math.floor(Math.random() * (0 - 7)) + 7;
    
}


let id = setInterval(function(){ write(); }, 30);

any.onclick = function(){
    clearInterval(id)
    txt.innerHTML="tu número de la suerte"
};
let valor = 10
window.addEventListener("keydown", function (event) {
    //console.log(event);

    valor+=30
    console.log(valor)
    wizar.style.paddingTop=valor;

  },false);