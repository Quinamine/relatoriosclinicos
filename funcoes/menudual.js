
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
    const botaoAbrirConteudoDeAtalhos = document.querySelector("button.abrir-conteudo-de-atalhos-do-teclado");
    const botaoFecharConteudoDeAtalhos = document.querySelector("button.fechar-conteudo-de-atalhos-do-teclado");

    botaoAbrirConteudoDeAtalhos.addEventListener("click", () => abrirOuFecharAbasDoMenu("abrir", conteudoDeAtalhos));
    botaoFecharConteudoDeAtalhos.addEventListener("click", () => abrirOuFecharAbasDoMenu("fechar", conteudoDeAtalhos));


    // ABRIR OU FECHAR CONTEÚDO DE COOKIES
    const politicaDeCookies = document.querySelector("article#politica-de-cookies");
    const botaoAbrirpoliticaDeCookies = document.querySelectorAll("button.abrir-politica-de-cookies"); 
    const botaoFecharPoliticaDeCookies = document.querySelector("button.fechar-artigo.cookies");

    botaoAbrirpoliticaDeCookies.forEach ( a => { 
        a.addEventListener("click", () => {
            abrirOuFecharAbasDoMenu("abrir", politicaDeCookies);
            Foco.destacarConteudo(politicaDeCookies);
        });
    });
    botaoFecharPoliticaDeCookies.addEventListener("click", () => abrirOuFecharAbasDoMenu("fechar", politicaDeCookies));

    
    // ABRIR OU FECHAR CONTEÚDO SOBRE
    const artigoSobre = document.querySelector("article#sobre");
    const botaoAbrirArtigoSobre = document.querySelectorAll("button.abrir-artigo-sobre");
    const botaoFecharArtigoSobre = document.querySelector("button.fechar-artigo.sobre");

    botaoAbrirArtigoSobre.forEach ( a => {
        a.addEventListener("click", () => {
            abrirOuFecharAbasDoMenu("abrir", artigoSobre);
            Foco.destacarConteudo(artigoSobre);
        });
    });
    botaoFecharArtigoSobre.addEventListener("click", () => abrirOuFecharAbasDoMenu("fechar", artigoSobre));


    // ABBRIR OU FECHAR CONTEUDO DE CONERSAO PARA PDF
    const artigoDeConversaoPdf = document.querySelector("article.conversao-pdf");
    const botaoAbrirArtigoDeConversaoPdf = document.querySelector("button.abrir-artigo-de-conversao-pdf");
    const botaoFecharArtigoDeConversaoPdf = document.querySelector("button.fechar-artigo.pdf");

    botaoAbrirArtigoDeConversaoPdf.addEventListener("click", () => { 
        abrirOuFecharAbasDoMenu("abrir", artigoDeConversaoPdf);
        Foco.destacarConteudo(artigoDeConversaoPdf);
    });
    botaoFecharArtigoDeConversaoPdf.addEventListener("click", () => abrirOuFecharAbasDoMenu("fechar", artigoDeConversaoPdf));


});