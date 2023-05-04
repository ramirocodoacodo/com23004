var a1 = [1,2,3,4,-5,0];
let a2 = ["Ramiro", "Juan"];
const a3 = [1,true,4.0,[1,1,0],"Hola Mundo!"];
a4 = new Array(1,2,3,0);

console.log(a3);
a3.push("Laura");
a3.pop()
console.log(a3);

// Insertar o eliminar...
a3.splice(1,0,"1",123);
console.log(a3);
a3.splice(1,2);
console.log(a3);

console.clear();

var a5 = a1.slice(1,3);
console.log(a5);

var a1 = [1,2,3,4,-5,0];
console.log(a1);
// for
for (let i = 0; i < a1.length; i++) {
    // let element = a1[i];
    // element *= 2;
    // console.log(element);
    a1[i] *= 2;
}
console.log(a1);

// for in
for (const key in a1) {
    a1[key] *= 2;
}

persona = {
    nombre: "Ramiro",
    apellido: "Escalante"
}

for (const key in persona) {
    console.log(key + ":" + persona[key]);
}

posiciones = a1.keys();

for (const iterator of "Hola Mundo!") {
    console.log(iterator);
}

console.clear();
var a1 = [1,2,3,4,-5,0];
console.log(a1);
a1.sort();
// a1.reverse();
console.log(a1);
a1.sort((a,b)=>b-a);
console.log(a1);

function mult(elem, i, arr){
    arr[i] = elem * 10;
}

a1.forEach(mult);
console.log(a1);

// Evaluar si en un evento hay menores edades
edades = [17,16,18,20];

function esMenor(e){
    return e < 18;
}

console.log(edades.every(esMenor));

console.clear();

// localStorage.setItem("nombre", "Ramiro");
var nombre = localStorage.getItem("nombre");
// sessionStorage.setItem("apellido", "Escalante");
sessionStorage.getItem("apellido");
document.getElementById("miDiv").innerHTML = nombre;
