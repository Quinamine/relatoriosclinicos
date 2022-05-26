
window.onload = () => {
    const header = document.querySelector("header");
    const hamburguer = document.querySelector(".hamburguer");

    hamburguer.addEventListener("click", () => {
        header.classList.toggle("com-menu-aberto");
    })
}