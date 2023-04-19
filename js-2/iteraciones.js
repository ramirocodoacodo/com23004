// while: mientras
// Ciclo exacto
cont = 0;
while (cont < 5) {
    cont++;
    console.log(cont);
}

// Ciclo condicional
suma = 0;
num = parseInt(prompt("Ingrese un número: "))
while (num != 0) {
    suma += num;
    num = parseInt(prompt("Ingrese un número: "))
}
console.log("Suma:", suma)

// do-while
do {
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
} while (menu < 1 || menu > 3);

// for
for (let i=1; i <= 5; i++) {
    console.log(i);
    if (i==3){
        break;  // Mala práctica.
    }
}

// break;
// continue;
