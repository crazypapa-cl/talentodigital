var input = document.getElementById("nombre")
console.log(input)

function inspect(){
    for (const propiedad in input){
        console.log(`${propiedad}: ${input[propiedad]}`);
    }
}

inspect()