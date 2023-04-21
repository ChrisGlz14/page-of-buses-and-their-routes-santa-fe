
const toggleBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");
const lineas = document.querySelector(".lineas");



toggleBtn.addEventListener("click",show =>{
    menu.classList.toggle("show");
    console.log (toggleBtn)
})
