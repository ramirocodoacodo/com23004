function sumar(num1, num2) {
    let suma = num1 + num2;
    return suma;
    // console.log("Esta línea no se ejecuta...");
}

function mostrar(texto) {
    prueba = "Hola Mundo";
    console.log(texto);
}

console.log(mostrar("Hola Mundo!"));  // undefined
mostrar("Hola Mundo!")
var suma = sumar(10, 2);
console.log(suma);
console.log(sumar(10, 3));
mostrar(sumar);
console.log("Prueba:")
console.log(prueba);
/* ƒ sumar(num1, num2) {
    let suma = num1 + num2;
    return suma;
    // console.log("Esta línea no se ejecuta...");
}
*/

// console.clear();

// let vs. var
var a = 5;
if (a==5) {
    let a = 4;
    var b = 10;
}
console.log(a);
console.log(b);

// funciones anónimas
var sumar = function (num1, num2) {
    let suma = num1 + num2;
    return suma;
    // console.log("Esta línea no se ejecuta...");
}

// funciones flecha
var sumar = (num1, num2) => num1 + num2;
mostrar(sumar(10,2));

// callbacks
function procesarEntrada(callback){
    let nombre = prompt("Ingrese su nombre: ");
    callback(nombre);
}

procesarEntrada((texto) => console.log(texto));

// clausuras / clousures
function crearSumador(valorASumar) {
    return function (num) {
        return num + valorASumar;
    }
}

var sumar5 = crearSumador(5);
let sumar10 = crearSumador(10);

mostrar(sumar5);
mostrar(sumar10);

mostrar(sumar5(20));
mostrar(sumar10(20));
