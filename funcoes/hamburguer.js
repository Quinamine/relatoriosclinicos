window.addEventListener("load", () => {

    const hamburguer = document.querySelector(".hamburguer");
    const menu = document.querySelector(".menu");
    const desfoque = document.querySelector(".desfoque-do-fundo");

    hamburguer.addEventListener("click", () => {

        hamburguer.classList.toggle("on");
        menu.classList.toggle("on");
        desfoque.classList.toggle("on");
    })
})



