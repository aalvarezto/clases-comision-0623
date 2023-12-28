"use strict";

function mostrarAyuda() {
  console.log("Lista de comandos:");
  console.log("");
  console.log("    --help                        Muestra la ayuda.");
  console.log("");
  console.log("    --saludar           [?nombre] Imprime un saludo en la consola, optional nombre");
  console.log("    --contar-vocales      [texto] Imprime el número de vocales ingresadas en [texto]");
  console.log("");
}

module.exports = mostrarAyuda;
