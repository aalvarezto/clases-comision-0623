"use strict";

const filtrarComandos = require("./filtrarComandos");

function esVocal(letra) {
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    return true;
  }

  return false;
}

function contarVocales() {
  let cantidadVocales = 0;

  const parametros = filtrarComandos();
  const texto = parametros[0];

  for (let index = 0; index < texto.length; index++) {
    const letra = texto[index];

    if (esVocal(letra)) {
      cantidadVocales = cantidadVocales + 1;
    }
  }

  console.log(cantidadVocales);
}

module.exports = contarVocales;
