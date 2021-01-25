var uno = document.getElementById('01');

for(var i = 0; i < 22; i++){
    console.log(i)
    var newImg = document.createElement('img');
    uno.appendChild(newImg).setAttribute('src',`img/${i}.jpg`);

}
