
const hamburguer = {

    abrir() {
        menuHamburguer.classList.add("on");
        nav.classList.add("on");
        desfoque.classList.add("parcial");
        body.classList.add("hide-overflow");
        desfocarFundo();
    },

    fechar() {
        menuHamburguer.classList.remove("on");
        nav.classList.remove("on");
        desfoque.classList.remove("parcial");
        body.classList.remove("hide-overflow");
        focarFundo();
    }
}

let menuHamburguer, janelasDesfocantes, desfoque, nav, body;
window.addEventListener("load", () => {

    // Inicialização das variáveis
    menuHamburguer = document.querySelector(".hamburguer");
    desfoque = document.querySelector(".desfoque-do-fundo");
    nav = document.querySelector(".menu");
    body = document.querySelector("body");

    menuHamburguer.addEventListener("click", () => {
        if(menuHamburguer.classList.contains("on")) {
            hamburguer.fechar();
        }
        else {
            hamburguer.abrir();
        }
    });

    desfoque.addEventListener("click", hamburguer.fechar());
});


window.addEventListener("click", event => {
    const isMenuHamburguer = event.target.matches(".hamburguer");
    const isMenuHamburguerChild = event.target.matches(".camada");
    const isMenuContainer = event.target.matches(".menu");

    if ((!isMenuHamburguer) && (!isMenuHamburguerChild) && (!isMenuContainer)) {
        if(menuHamburguer.classList.contains("on")) hamburguer.fechar();
    }
})





