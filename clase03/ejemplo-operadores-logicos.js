"use strict";

const nombre = "andrés";
const edad = 18;

const esAdulto = edad > 17;

const isAdult = edad > 17;

const comienzaConA = nombre[0] === "A" || nombre[0] === "a";

const resultado = esAdulto && comienzaConA;

console.log(resultado);
