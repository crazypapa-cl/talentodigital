// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')

for(var i = 100; i>=1; i--){
    console.log(i)
    sandbox.insertAdjacentHTML("beforeend","<p>"+i+"</p>")
}

        
