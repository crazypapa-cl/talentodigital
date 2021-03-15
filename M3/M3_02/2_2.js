var nota = (Math.floor(Math.random()*(8 - 1)+1))
   console.log(nota)



setInterval(function(){ 
    console.log(new Date().getSeconds())
    var segundo = new Date().getSeconds()
    if(segundo <=10){
        console.log('El segundo es 10 o menor')
        console.log("“El minuto actual está recién naciendo”")
    }else if (segundo >=11 &&  segundo <= 40){
        console.log('Mayor de 11 menor de  40')
        console.log('El minuto actual está en pleno desarrollo')
        

    }else{
        console.log('De otra manera')
        console.log('“El minuto actual está en su fase final”')
    }
    
 }, 1000);