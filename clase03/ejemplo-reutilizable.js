"use strict";

const entrada = process.argv[2];

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

let cantidadVocales = 0;

for (let index = 0; index < entrada.length; index++) {
  const letra = entrada[index];

  if (esVocal(letra)) {
    cantidadVocales = cantidadVocales + 1;
  }
}

let nuevoTexto = ""

for (let index = 0; index < entrada.length; index++) {
	const letra = entrada[index]
	
	if (esVocal(letra)) {
		nuevoTexto = nuevoTexto + "i"
	} else {
		nuevoTexto = nuevoTexto + letra
	}
}

console.log(nuevoTexto);
