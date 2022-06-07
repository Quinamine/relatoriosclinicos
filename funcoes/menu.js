
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




}