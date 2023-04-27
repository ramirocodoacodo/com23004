var persona = {
    nombre: "Juan",
    apellido: "Paz",
    dni: 1234,
    // datos: function(){
    //     return this.nombre + " " + this.apellido;
    // },
    datos() {
        return this.nombre + " " + this.apellido;
    }
    }

console.log(persona);
console.log(persona.nombre);
console.log(persona.toString());
console.log(persona['nombre']);
console.log(persona.datos());
persona.apellido = "Escalante";

let texto = "Hola Mundo!";
console.log(texto.toString());

class Perro {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
}

const perro1 = new Perro("Feli", 15);
perro1.nombre = "Popei";
var perro2 = new Perro("Feli", 15);

// string
var texto1 = "Hola Mundo !";
var texto2 = new String("Hola");

// prop.
console.log(texto1.length);

// métodos
console.log(texto1.charAt(1));
console.log(texto1[1]);
console.log(texto1);
console.log(texto1.replace("Hola", "HOLA"));
console.log(texto1);
console.log(texto1.split(" "));

document.write("Hola Mundo!");