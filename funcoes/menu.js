
const Menu = {

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

// Esta variável global uso no trecho "Ver politica de cookies" do conteudo "SOBRE";
let conteudodeCookies; 

window.onload = () => {

    // Abrir e Fechar conteúdo de atalhos
    const conteudodeAtalhos = document.querySelector("section.atalhos-do-teclado");

    const aAbrirAtalhos = document.querySelector("a.atalhos-do-teclado");
    aAbrirAtalhos.addEventListener("click", () => {
        Menu.abrirOuFecharAba("abrir", conteudodeAtalhos);
    });

    const botaoFecharAtalhos = document.querySelector("button.fechar-atalhos");
    botaoFecharAtalhos.addEventListener("click", () => {
        Menu.abrirOuFecharAba("fechar", conteudodeAtalhos);
    });

    // Abrir e Fechar conteúdo de cookies
    conteudodeCookies = document.querySelector("article.politica-de-cookies");

    const aAbrirCookies = document.querySelector("a.cookies");
    aAbrirCookies.addEventListener("click", () => {
        Menu.abrirOuFecharAba("abrir", conteudodeCookies);
    })  

    const botaoFecharCookies = document.querySelector("button.fechar-artigo.cookies");
    botaoFecharCookies.addEventListener("click", () => {
        Menu.abrirOuFecharAba("fechar", conteudodeCookies);
        Menu.abrirOuFecharAba("fechar", conteudoSobre);
    });


    // Abrir e Fechar conteúdo de sobre
    const conteudoSobre = document.querySelector("article.sobre");

    const aAbrirSobre = document.querySelector("a.sobre");
    aAbrirSobre.addEventListener("click", () => {
        Menu.abrirOuFecharAba("abrir", conteudoSobre);
    })  

    const botaoFecharSobre = document.querySelector("button.fechar-artigo.sobre");
    botaoFecharSobre.addEventListener("click", () => {
        Menu.abrirOuFecharAba("fechar", conteudoSobre);
    });



}