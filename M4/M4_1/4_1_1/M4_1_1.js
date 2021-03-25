
// tomando control de div sanbox en la pagina HTML
var sandbox = document.getElementById('sandbox')
var app= new Vue({
    el:'#app',
    data:{
        tipos:[
        {cafe: 'Capuchino'},
       {cafe:  'Expresso'},
       {cafe: 'Moca'},
       {cafe: 'Late'},
        {cafe: 'Americáno'},
        {cafe: 'Arabe'},
       { cafe: 'Cortado'}
        ]
    }
})

