const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

const lineaCuatro = document.getElementById("linea-cuatro");
const lineaCinco = document.getElementById("linea-cinco");
const lineaOcho = document.getElementById("linea-ocho");
const lineaDiez = document.getElementById("linea-diez");
const lineaOnce = document.getElementById("linea-once");
const lineaTrece = document.getElementById("linea-trece");
const lineaCatorce = document.getElementById("linea-catorce");
const lineaQuince = document.getElementById("linea-quince");
const lineaDiecisies = document.getElementById("linea-dieciseis");
const lineaDieciocho = document.getElementById("linea-dieciocho");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});


lineaCuatro.addEventListener("click", () =>{
    console.log(lineaCuatro);
})