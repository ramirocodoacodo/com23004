const {createApp} = Vue;

const app1 = Vue.createApp({
    data() {
        return {
            msj: "Hola Mundo!"
        }
    }
}
).mount('#app');

app1.msj = "Hola Ramiro!";
