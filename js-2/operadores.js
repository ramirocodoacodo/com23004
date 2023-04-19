// Operadores de asignación
cont = 0;
cont += 1;  // cont = cont + 1;
console.log(cont);
cont++;  // cont = cont + 1; // Operador incremental
console.log(cont);
cont += 1;  // cont = cont + 1;
console.log(cont);
cont += 1;  // cont = cont + 1;
console.log(cont);

// Operadores relacionales
var A = 5;
B = 2;
console.log(A == B);  // false
console.log(A === B);  // false
console.log(A <= B);  // false
console.log(A != B);  // true

// operadores lógicos
// AND: &&
// OR: || pipe
// NOT: !
console.clear();
console.log(A <= 5-2*1 && B==2 || A+B == 7);  // true && false => false
console.log(true && true && false);  // true
console.log(false && true);  // false
console.log(false || true);  // true
console.log(!true);

texto1 = "Ramiro";
texto2 = "Escalante Leiva";
texto = texto1 + " " + texto2;
console.log(texto);

texto = "";
varIngresada = prompt("Ingrese texto");
texto += varIngresada;
varIngresada = prompt("Ingrese texto");
texto += varIngresada;
varIngresada = prompt("Ingrese texto");
texto += varIngresada;
console.log(texto);
