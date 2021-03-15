var sandbox = document.getElementById('sandbox')
var azar1 = Math.floor(Math.random()*(100 - 0)+1)
var azar2 = Math.floor(Math.random()*(100 - 0)+1)


// verificar random numbers via console log

console.log(azar1+" : "+ azar2)

sandbox.innerHTML="<h2>El valor de x es :"+azar1+"<h2>El valor de Y es :"+azar2+"<br><h1>"+azar1+azar2+"</h1>"