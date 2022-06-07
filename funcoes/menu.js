
const Menu = {

   /* abrirOuFecharAtalhos: (accao) => {

        

        accao == "abrir" ? 
            conteudo.classList.add("on") 
            : 
            conteudo.classList.remove("on");
    }*/


    abrirOuFecharAba: (accao, aba) => {
        if(accao == "abrir") { 
            aba.classList.add("on");
            desfocarFundo(1);
        }
        else {
            aba.classList.remove("on");
            desfocarFundo(0);
        }     
    }
}




window.onload = () => {

    // Abrir e Fechar conteúdo de atalhos
    const conteudodeAtalhos = document.querySelector("section.atalhos-do-teclado");

    const aAbriAtalhos = document.querySelector("a.para-atalhos-do-teclado");
    aAbriAtalhos.addEventListener("click", () => {
        Menu.abrirOuFecharAba("abrir", conteudodeAtalhos);
    });

    const botaoFecharAtalhos = document.querySelector("button.fechar-atalhos");
    botaoFecharAtalhos.addEventListener("click", () => {
        Menu.abrirOuFecharAba("fechar", conteudodeAtalhos);
    });

    // Abrir e Fechar conteúdo de cookies
    const conteudodeCookies = document.querySelector("article.politica-de-cookies");

    const aAbrirCookies = document.querySelector("a.cookies");
    aAbrirCookies.addEventListener("click", () => {
        Menu.abrirOuFecharAba("abrir", conteudodeCookies);
    })  

    const botaoFecharCookies = document.querySelector("button.fechar-artigo");
    botaoFecharCookies.addEventListener("click", () => {
        Menu.abrirOuFecharAba("fechar", conteudodeCookies);
    });






   /* 
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
    */
}