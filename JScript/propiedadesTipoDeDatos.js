//? Longitur de un string .length
var cadenaCorta = "A";
var cadenaLarga = "otorrinolaringólogo";

console.log("Cadena corta =", cadenaCorta.length, "\nCadena larga =", cadenaLarga.length);
//!-------------------------------------------------------------------------
//? Indices de un string

var lenguajeDeProgramacion = "JavaScript";
/*
Cadena:     J a v a S c r i p t
Índices:    0 1 2 3 4 5 6 7 8 9
*/

//* El último índice es siempre la longitud -1 porque comenzamos a contar desde 0.

//* miCadena.length para "JavaScript" es 10. El último índice es 9.

miCadena = "lenguaje"
console.log(miCadena[miCadena.length-1])
//!-------------------------------------------------------------------------
var miSustantivo = "perro";
var miAdjetivo = "negro";
var miVerbo = "corrió";
var miAdvervio = "rápidamente";

/*
Concatena las cadenas para crear una cadena que muestre un mensaje. Puedes cambiar los valores de las variables.
Por ejemplo: El perro negro corrió rápidamente a la tienda. 
La bicicleta pequeña voló a tienda lentamente.
*/

var palabraEnBlanco = "El " + miSustantivo+" "+ miAdjetivo +" "+ miVerbo +" "+ miAdvervio + "a la tienda.";
console.log(palabraEnBlanco);

//!-------------------------------------------------------------------------

var miArreglo = ["Alejandro", 28];
console.log(miArreglo);

var estudiantes = ["Andres", "Agustin", "Nora", "Ana"];
console.log(estudiantes);

var notas = [95, 67, 89, 56];
console.log(notas)

var listaDeEstudiantes = [["Alejandro", 28], ["Tito", 40], ["Fernando", 45]];
console.log(listaDeEstudiantes)

var listaDeProductos = [["Camisa", 28,40, "Talle 5"],["Pantalon", 30,43, "Talle S"],["Buzo", 12,10, "Talle 4"]];
console.log(listaDeProductos)

//* Acceder a arreglos

var nuevoArreglo = ["Alejandro", "Andrea", "Flaco", "Poly", "Galia"];

console.log(nuevoArreglo[1])

//* Cambiar valor a un arreglo

nuevoArreglo[0] = ["A","L","E"]

console.log(nuevoArreglo)

//* Agregar un string

nuevoArreglo.push("Objeto")

console.log(nuevoArreglo)

//* Remover último elemento de un arreglo

nuevoArreglo.pop()

console.log(nuevoArreglo)

//* Remover primer elemento del arreglo

nuevoArreglo.shift()

console.log(nuevoArreglo)

//* Agregar un elemento al principio del arreglo

nuevoArreglo.unshift("Hipopotamo")

console.log(nuevoArreglo)


