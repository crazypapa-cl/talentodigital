
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
var emociones = ['desconfiado','impresionado','enamorado','aburrido']


var app= new Vue({
    el:'#app',
    data:{planetas:[
        {
            nombre: 'Mercurio',
            radio : '2,439.7 km',
            url:'./mercurio.png'

        },
        {
            nombre:'Venus',
            radio:'6,051.8 km',
            url:'./venus.png'
        },
        {
            nombre:'Tierra',
            radio:'6,371 km',
            url:'./tierra.png'
        },
        {
            nombre:'Marte',
            radio:'3,389.5 km',
            url:'./marte.png'
        }
        ,
        {
            nombre:'Júpiter',
            radio:'69,911 km',
            url:'./Júpiter.png'
        },
        {
            nombre: 'Saturno',
            radio: '58,232 km',
            url:'./saturno.png'
        },
        {
            nombre: 'Urano',
            radio: '25,362 km',
            url:'./urano.png'
        },{
            nombre: 'Neptuno',
            radio: '24,622 km',
            url:'./neptuno.png'
        },{
            nombre: 'Pluton',
            radio: '1,188.3 km',
            url:'./pluton.png'
        },
            
        

    ],
    selected : "",
    radius:""

    }
})