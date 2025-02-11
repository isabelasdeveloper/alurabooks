window.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".menu");
    menu.style.display = "none"; // Garante que o menu estará fechado ao carregar
});

document.getElementById("menu-btn").addEventListener("click", function() {
    const menu = document.querySelector(".menu");
    if (menu.style.display === "none") {
        menu.style.display = "block"; // Abre o menu
    } else {
        menu.style.display = "none"; // Fecha o menu
    }
});

// Fecha o menu ao clicar fora dele
document.addEventListener("click", function (event) {
    var menu = document.getElementById("menu");
    var button = document.getElementById("menu-btn");

    if (!menu.contains(event.target) && event.target !== button) {
        menu.style.display = "none";
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Garante que o menu estará fechado ao carregar
window.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector("#menu-central-categorias");
    menu.style.display = "none"; // Garante que o menu estará fechado ao carregar
});

// Abre e fecha o menu quando o botão "CATEGORIAS" for clicado
document.getElementById("menu-btn-central").addEventListener("click", function() {
    const menu = document.querySelector("#menu-central-categorias");
    if (menu.style.display === "none") {
        menu.style.display = "block"; // Abre o menu
    } else {
        menu.style.display = "none"; // Fecha o menu
    }
});

// Fecha o menu ao clicar fora dele
document.addEventListener("click", function (event) {
    const menu = document.querySelector("#menu-central-categorias");
    const button = document.getElementById("menu-btn-central");

    if (!menu.contains(event.target) && event.target !== button) {
        menu.style.display = "none"; // Fecha o menu
    }
});






