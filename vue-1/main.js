const {createApp} = Vue;

const ej2 = Vue.createApp({
    data() {
        return {
            nombre: "Ramiro",
            apellido: "Escalante Leiva",
            direccion: "Buenos Aires"
        }
    },
    methods: {
        detalles() {
            return `Soy ${this.nombre} ${this.apellido} y vivo en ${this.direccion}.`;
        }
    }
}
).mount('#ejemplo-2');

const ej3 = Vue.createApp({
    data() {
        return {
            contenidoHTML: /*html*/ `<div>
                <h2>Imagen de la web</h2>
            </div>
            `,
            imgSrc: "Vue.js_Logo_2.svg (1).png",
            imgAlt: "Imagen de Vue"
        }
    }
}
).mount('#ejemplo-3');

const miComponente = {
    template:  /*html*/ `        <div v-on:click="cambiarNombre()" v-on:mouseout="reestablecerNombre()">
    <h2>Componente creado por <span id="nombre">{{nombre}}</span></h2>
    </div>`,
    data() {
        return {
            nombre:"Ramiro"
        }
    },
    methods: {
        cambiarNombre() {
            this.nombre = "Ezequiel";
        },
        reestablecerNombre() {
            this.nombre = "Ramiro";
        }
    }
}

const ej5 = Vue.createApp({
        components: {
            'mi-componente':miComponente
        }
    }
).mount('#ejemplo-5');

// ej2.apellido = "Escalante";