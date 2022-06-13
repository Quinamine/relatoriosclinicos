
function abrirOuFecharAbasDoMenu(accao, aba) {
    if(accao == "abrir") { 
        aba.classList.add("on");
        Desfoque._100Viewport();
    }
    else {
        aba.classList.remove("on");
        Foco._100Viewport();
    }     
}


window.addEventListener("load", () => {

    // ABRIR CONTEUDO DE ATALHOS
    const conteudoDeAtalhos = document.querySelector("section.atalhos-do-teclado");
    const aAbrirAtalhos = document.querySelector("a.abrir-atalhos-do-teclado");
    const botaoFecharAtalhos = document.querySelector("button.fechar-atalhos");

    aAbrirAtalhos.addEventListener("click", () => abrirOuFecharAbasDoMenu("abrir", conteudoDeAtalhos));
    botaoFecharAtalhos.addEventListener("click", () => abrirOuFecharAbasDoMenu("fechar", conteudoDeAtalhos));


    // ABRIR OU FECHAR CONTEÚDO DE COOKIES
    const conteudoDeCookies = document.querySelector("article.politica-de-cookies");
    const aAbrirCookies = document.querySelectorAll("a.abrir-politica-de-cookies"); 
    const botaoFecharCookies = document.querySelector("button.fechar-artigo.cookies");

    aAbrirCookies.forEach ( a => { 
        a.addEventListener("click", () => {
            abrirOuFecharAbasDoMenu("abrir", conteudoDeCookies);
            Foco.destacarConteudo(conteudoDeCookies);
        });
    });
    botaoFecharCookies.addEventListener("click", () => abrirOuFecharAbasDoMenu("fechar", conteudoDeCookies));

    
    // ABRIR OU FECHAR CONTEÚDO SOBRE
    const conteudoSobre = document.querySelector("article.sobre");
    const aAbrirConteudoSobre = document.querySelectorAll("a.abrir-conteudo-sobre");
    const botaoFecharSobre = document.querySelector("button.fechar-artigo.sobre");

    aAbrirConteudoSobre.forEach ( a => {
        a.addEventListener("click", () => {
            abrirOuFecharAbasDoMenu("abrir", conteudoSobre);
            Foco.destacarConteudo(conteudoSobre);
        });
    });
    botaoFecharSobre.addEventListener("click", () => abrirOuFecharAbasDoMenu("fechar", conteudoSobre));


    // ABBRIR OU FECHAR CONTEUDO DE CONERSAO PARA PDF
    const conteudoPdf = document.querySelector("article.conversao-pdf");
    const aAbrirConteudoPdf = document.querySelector("a.abrir-conteudo-pdf");
    const botaoFecharPdf = document.querySelector("button.fechar-artigo.pdf");

    aAbrirConteudoPdf.addEventListener("click", () => { 
        abrirOuFecharAbasDoMenu("abrir", conteudoPdf);
        Foco.destacarConteudo(conteudoPdf);
    });
    botaoFecharPdf.addEventListener("click", () => abrirOuFecharAbasDoMenu("fechar", conteudoPdf));


})