//* Definición de función
function mostrarMensaje() {
    console.log("Hola, mundo");
}

mostrarMensaje();

//* Funciones con argumentos

function sumar(a, b) {
    var suma = a + b;
    console.log("El resultado de la suma es: "+suma)
}

sumar(10,20);

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
    console.log(cadena1+" "+cadena2+" "+cadena3);
}

concatenarTresCadenas("Miguel", "Alejandro", "Lescano");

//* Funcion que retorna valor

function retornarSuma(a, b){
    return a + b;
}

console.log(retornarSuma(1,2))

function lenguaG(lenguajeProgramacion) {
    console.log("Quiero aprender a programar en: "+lenguajeProgramacion);
}

lenguaG("JavaScript");

