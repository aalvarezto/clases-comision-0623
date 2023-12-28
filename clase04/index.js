"use strict";

const encontrarComando = require("./encontrarComando");
const mostrarAyuda = require("./mostrarAyuda");
const saludar = require("./saludar");
const contarVocales = require("./contarVocales");

const comando = encontrarComando();

if (comando === "--help") {
  mostrarAyuda();
} else if (comando === "--saludar") {
  saludar();
} else if (comando === "--contar-vocales") {
  contarVocales();
} else {
  console.log(
    "Por favor ingrese un comando válido o --help, para mostrar la lista de comandos."
  );
}
