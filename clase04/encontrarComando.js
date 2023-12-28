"use strict";

// recorrer el array process.argv

//    si el elemento empieza con "--"
//      retornamos el comando

function encontrarComando() {
  for (let index = 0; index < process.argv.length; index++) {
    const element = process.argv[index];

    if (element[0] === "-" && element[1] === "-") {
      return element;
    }
  }
}

module.exports = encontrarComando;
