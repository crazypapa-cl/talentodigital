"use strict";

var input = document.getElementById("nombre");
console.log(input);

function inspect() {
  for (var propiedad in input) {
    console.log("".concat(propiedad, ": ").concat(input[propiedad]));
  }
}

inspect();