const {createApp} = Vue;

const app = Vue.createApp({
    data() {
        return {
            titulo: "Ejemplo 9 con Vue.js",
            frutas: [
                {nombre:"Manzana", cantidad:10},
                {nombre:"Naranja", cantidad:0}
            ],
            nuevaFruta: ''
        }
    },
    methods: {
        agregarFruta() {
            this.frutas.push({nombre:this.nuevaFruta, cantidad:0});
            this.nuevaFruta = ''
        },
        otroMetodo() {

        }
    },
    computed: {
        
    }
}
).mount('#ejemplo-9');
