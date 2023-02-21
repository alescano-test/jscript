/*
Próximo en la fila
En informática una cola (queue) es una estructura de datos abstracta
en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden añadir
al final de la cola y los elementos previos se retiran del principio de la cola.

Define una función proximoEnLaFila() que tome un arreglo (arreglo) y un número (elemento)
como argumentos. Agrega el número al final de la fila del arreglo y luego elimina el primer elemento
del arreglo. La función proximoEnLaFila() debe retornar el elemento que fue removido
*/

var arreglo = ["Alejandro", "Andrea", "Poly", "Flaco", "Galia"]

function proximoEnLaFila(arr, elemento) {
    arr.push(elemento)
    elementoLiminado = arr[0]
    arr.shift()
    console.log("El elemento eliminado fue "+elementoLiminado)
}

proximoEnLaFila(arreglo, "Casa")
console.log(arreglo)