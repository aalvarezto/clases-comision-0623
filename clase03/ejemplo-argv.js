"use strict";

const nombre = process.argv[2];
const edad = process.argv[3];
console.log(process.argv)
const esAdulto = edad > 17;

const comienzaConA = nombre[0] === "A" || nombre[0] === "a";

const resultado = esAdulto && comienzaConA;

console.log(resultado);
