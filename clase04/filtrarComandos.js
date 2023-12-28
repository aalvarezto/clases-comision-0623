"use strict";

// creamos el array parametros

// recorrer el array process.argv
//    si el elemento no empieza con "--"
//      guardamos el elemento en el array parametros

// retornamos el array parametros

function filtrarComandos() {
  const parametros = [];

  for (let index = 2; index < process.argv.length; index++) {
    const element = process.argv[index];

    if (!(element[0] === "-" && element[1] === "-")) {
      parametros.push(element);
    }
  }

  return parametros;
}

module.exports = filtrarComandos;
