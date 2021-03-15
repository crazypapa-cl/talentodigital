"use strict";

var body = document.getElementById('main');
var loop = 0;
var por = 10;
var left = 'left:';
var right = 'right:';
var v2 = -1;
var v1 = 1;
var v = true;
var f = false;

function crearnodo(desplazar, por, v) {
  if (loop <= 10) {
    loop++;
    por += 10;
    console.log('loop vale -----  ' + loop);
    console.log('Por vale -----   ' + por);
    var newIMG = document.createElement("img");
    var di = document.createElement('div');
    newIMG.setAttribute('src', 'img/cosmonaut.png');
    newIMG.setAttribute('style', 'width:120px;transform: scaleX(' + v + ');' + desplazar + por + ';');
    di.setAttribute('class', 'separador');
    di.appendChild(newIMG);
    body.appendChild(di);
    window.scrollTo(0, document.body.scrollHeight);
  } else if (loop <= 20) {
    por -= 20;
    loop++;
    console.log('loop que pasa por else vale ---- ' + loop);
    var newIMG = document.createElement("img");
    var di = document.createElement('div');
    newIMG.setAttribute('src', 'img/cosmonaut.png');
    newIMG.setAttribute('style', 'width:120px;transform: scaleX(' + v + ');' + desplazar + por + '%' + ';');
    di.setAttribute('class', 'separador');
    di.appendChild(newIMG);
    body.appendChild(di);
    window.scrollTo(0, document.body.scrollHeight);

    if (loop == 19) {
      loop = 0;
      por = 0;
    }
  }
}
/*
function crearnodo(desplazar,por){
    if(loop <=10){
        loop++
        por+=5
        console.log('loop vale -----  '+ loop)
        console.log('Por vale -----   '+ por)
        var newIMG = document.createElement("img");
        var di = document.createElement('div');
        newIMG.setAttribute('src','img/cosmonaut.png')
        newIMG.setAttribute('style','width:120px;'+desplazar+por+';')            
        di.setAttribute('class','separador')
        di.appendChild(newIMG)
        body.appendChild(di)
        window.scrollTo(0,document.body.scrollHeight);


        }else if(loop<=20){
            por+=50
            loop++
            console.log('loop que pasa por else vale ---- '+ loop)
            var newIMG = document.createElement("img");
            var di = document.createElement('div');
            newIMG.setAttribute('src','img/cosmonaut.png')
            newIMG.setAttribute('style','width:120px;'+desplazar+por+';')           
            di.setAttribute('class','separador')
            di.appendChild(newIMG)
            body.appendChild(di)
            window.scrollTo(0,document.body.scrollHeight);

            if(loop==19){
                loop = 0
                por=0
            }
        }
}

*/


function img() {
  crearnodo(left, por, v1);
  crearnodo(right, por, v2);
}
/*
setInterval(function(){ docu.writeln(`<img src="img/cosmonaut.png" style="width:100px">`)},90);
*/


setInterval(function () {
  img();
}, 100);