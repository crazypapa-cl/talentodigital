var sandbox = document.getElementById('sandbox')
console.log(sandbox)
var intro = prompt('incerte un numero porfavor','Solo Numeros')

if(isNaN(intro)){
    console.log('no es un numero ')
    sandbox.innerHTML="<h1>Solo Numeros porvafor</h1>"
    
}else{

    sandbox.innerHTML="<h1>El numero ingresado es : "+intro+"</h1>"+"<h2>Elevado por si mismo es</h2><br>"+"<h3>"+(intro**intro)+"</h3>"

}

console.log(intro + ' log del pront')



