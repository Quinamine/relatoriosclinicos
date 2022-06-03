
const Menu = {

    abrirOuFecharAtalhos: (accao) => {

        const conteudo = document.querySelector("section.atalhos-do-teclado");

        accao == "abrir" ? 
            conteudo.classList.add("on") 
            : 
            conteudo.classList.remove("on");
    }
}




window.onload = () => {

    
    try {
        // Eventos Mobile
        const header = document.querySelector("header");
        const hamburguer = document.querySelector(".hamburguer");

        hamburguer.addEventListener("click", () => {
            header.classList.toggle("com-menu-aberto");
        })


        // Eventoss para Desktop 

        // Abrir o conteúdo de atalhos
        const aTarget = document.querySelector("a.para-atalhos-do-teclado");
        aTarget.addEventListener("click", () => {
            Menu.abrirOuFecharAtalhos("abrir");
            desfocarFundo(1);
        });

        const botaoFechar = document.querySelector("button.fechar-atalhos");
        botaoFechar.addEventListener("click", () => {
            Menu.abrirOuFecharAtalhos("fechar");
            desfocarFundo(0);
        });


    } catch (error) {
        console.log("");
    }
    
}