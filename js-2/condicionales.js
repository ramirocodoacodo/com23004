console.clear();
// Estructuras condicionales
// Condicional simple
num = parseInt(prompt("Ingrese un número:"));
if (num > 0) {
    // Indentación
    console.log("El num es +.")
}
console.log("Sigo con mi prog.")

// Condicional doble
if (num > 0)
    console.log("El num es +.")
else
    console.log("El num es - o cero.")

// Condicional anidado
if (num > 0)
    console.log("El num es +.")
else
    if (num < 0) 
        console.log("El num es -.")
    else
        console.log("El num es cero.")

// else if: elif (NO existe en JS)
if (num > 0)
    console.log("El num es +.")
else if (num < 0) 
    console.log("El num es -.")
else
    console.log("El num es cero.")

// switch
menu = parseInt(prompt("Ingrese una opción: "));
switch (menu) {
    case 1:
        console.log("1: Alta de usuario.");
        break;
    case 2:
    case 3:
        console.log("2: Baja de usuario.")
        break;
    default:
        console.log("Ha ingresado una opción no válida.");
}

// Operador ternario
resultado = num > 0 ? "Positivo" : "Negativo o cero"
console.log(resultado);
