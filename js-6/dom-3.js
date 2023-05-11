function cambiarFondo() {
    document.querySelector(".ejemplo").style.backgroundColor = "blue";
    document.querySelectorAll(".ejemplo")[0].style.backgroundColor = "red";
    document.querySelector("#btn1").textContent = "Gracias!"
}