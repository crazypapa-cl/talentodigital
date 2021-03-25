// adquiriendo el carrusel
var carrusel =  document.getElementById('carrusel')
var galeria =  document.getElementById('galeria')
var imagenes = ['img/Imagen1.jpg','img/Imagen2.jpg','img/Imagen3.jpg']
var imgCarrusel = document.createElement('img')
var count = 0


console.log(galeria)

function slider(){
    console.log(imgCarrusel)
    console.log(count++)
    if(count<=(imagenes.length)-1) {
    imgCarrusel.setAttribute('src',imagenes[count])
    }else  {
        count=0
        imgCarrusel.setAttribute('src',imagenes[count])
    }
    
    imgCarrusel.setAttribute('class','slider gallery img-fluid')
    carrusel.appendChild(imgCarrusel)
}

setInterval(function (){ slider()},1500)
slider()

function gallery (){
for(i=0; i<=6; i++){
    console.log('Gallery')
    var imgCarrusel = document.createElement('img')
    galeria.appendChild(imgCarrusel).setAttribute('class','gallery img-fluid col-4')
    galeria.appendChild(imgCarrusel).setAttribute('src','img/'+i+'.jpg')


    
}

}

gallery()