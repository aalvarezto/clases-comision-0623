"use strict";

const filtrarComandos = require("./filtrarComandos");

function saludar() {
  const parametros = filtrarComandos();

  const persona = parametros[0];

  console.log("Hola " + persona);
}

module.exports = saludar;
