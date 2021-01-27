var  body =  document.getElementById('main')
function createNode(){
    var newIMG = document.createElement("img");
    var di = document.createElement('div');
    newIMG.setAttribute('src','img/cosmonaut.png')
    newIMG.setAttribute('style','width:120px')
    di.setAttribute('class','separador')
    di.appendChild(newIMG)
    body.appendChild(di)
}
function ima(){
  createNode()
    console.log('hola')
}

/*
setInterval(function(){ docu.writeln(`<img src="img/cosmonaut.png" style="width:100px">`)},90);
*/

setInterval(function (){ima()},300);