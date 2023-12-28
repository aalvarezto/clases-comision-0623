/**
 * Debemos crear un algoritmo que nos indique a que insitución
 * pertenece alguien, basándonos en su edad.
 * 
 * Como mejora, se deberá crear este código dentro de una
 * instrucción (función).
 */

const jardin = "Jardín de infantes N 201"
const primaria = "Escuela Normal N 16"
const secundaria = "Colegio Nacional 33"
const universidad = "Universidad Nacional de Córdoba"

const edad1 = 20

if (edad1 < 6) {
	console.log(jardin)
}

else if (edad1 < 12) {
	console.log(primaria)
}

else if (edad1 < 18) {
	console.log(secundaria)
}

else {
	console.log(universidad)
}
