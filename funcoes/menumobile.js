
const MenuHamburguer = {

    abrirOuFechar(accao) {

        if(accao=="abrir") {
            hamburguer.classList.add("on");
            sectionMenu.classList.add("on");
            Desfoque.abaixoDoCabecalho();
        }
        else {
            hamburguer.classList.remove("on");
            sectionMenu.classList.remove("on");
            Foco._100Viewport();
        }
    },

    ArtigoSobreOuCookiesAberto() {
        const artigos = document.querySelectorAll("article");

        for (i=0; i<artigos.length; i++) {
            if(artigos[i].classList.contains("on")) {
                return true;
            }
        }
    },

    omitirRolagemDoBody() {
        body.classList.add("hide-overflow");
    },

    desomitirRolagemDoBody() {
        if(this.ArtigoSobreOuCookiesAberto()) {
            return false;
        }
        body.classList.remove("hide-overflow");
    },

    omitirAlgunsItensDoNavNaJanelaDosArtigosSobreECookies() {
        for (const item of itensDoNavOmissos) {
            item.classList.add("omitir-na-janela-de-cookies-e-sobre");
        }
    },

    desomitirAlgunsItensDoNavNaJanelaDosArtigosSobreECookies() {
        if (this.ArtigoSobreOuCookiesAberto()) {
            return false;
        } 
        for (const item of itensDoNavOmissos) {
            item.classList.remove("omitir-na-janela-de-cookies-e-sobre");
        } 
    }
}

let hamburguer, sectionMenu, itensDoNavOmissos, body;
window.addEventListener("load", () => {
    
    // Inicialização das variáveis
    hamburguer = document.querySelector(".hamburguer");
    sectionMenu = document.querySelector("header section.menu")
    body = document.querySelector("body");
    const header = document.querySelector("header");

    // Eventos 
    hamburguer.addEventListener("click", () => {
        
        if (hamburguer.classList.contains("on")) {

            MenuHamburguer.abrirOuFechar("fechar");
            MenuHamburguer.desomitirRolagemDoBody();
            header.classList.remove("z-index-10");
            desfoque.classList.remove("z-index-9");

        }
        else {

            MenuHamburguer.abrirOuFechar("abrir");
            MenuHamburguer.omitirRolagemDoBody();
            Foco.destacarConteudo(header);
            desfoque.classList.add("z-index-9");

        }

        Foco.destacarConteudo(sectionMenu);
    });


    // Fechar Hamburguer com Itens do Menu
    const menuItens = document.querySelectorAll("header nav ul li:nth-child(1), header nav ul li button");

    menuItens.forEach ( item => {   
        item.addEventListener("click", () => {
            MenuHamburguer.abrirOuFechar("fechar");
            MenuHamburguer.desomitirRolagemDoBody();
            header.classList.remove("z-index-10");
            desfoque.classList.remove("z-index-9");


            // Desfoque total
            if(item.classList.contains("esvaziar-ficha")) {
                const celulas = document.querySelectorAll(".col-de-inputs input");
                let celulasPreenchidas = 0;

                for (const cel of celulas) { 
                    if(cel.value != "") celulasPreenchidas++;
                }

                if(celulasPreenchidas>0) {
                    desfoque.classList.remove("parcial");
                }
            }
        })
    });


    // Footer Menu Itens
    const botoesAbrirArtigosNoRodape = document.querySelectorAll("footer button.abrir-artigo-sobre, button.abrir-politica-de-cookies");


    botoesAbrirArtigosNoRodape.forEach ( botao => {
        botao.addEventListener("click", () => MenuHamburguer.omitirRolagemDoBody());    
    });

    // Desomitir Rolagem Body com Botoes do artigo
    const botoesFecharArtigo = document.querySelectorAll("button.fechar-artigo");

    botoesFecharArtigo.forEach( botao => {
        botao.addEventListener("click", () => {
            MenuHamburguer.desomitirRolagemDoBody();
            MenuHamburguer.desomitirAlgunsItensDoNavNaJanelaDosArtigosSobreECookies();
            header.classList.remove("z-index-10");
        });
    });

    // Omitir alguns itens do menu no conteudo Sobre e cookies
    itensDoNavOmissos = document.querySelectorAll("li.visivel-so-na-janela-da-ficha");
    const aOmitirAlgunsItensDoNav = document.querySelectorAll("button.abrir-artigo-sobre, button.abrir-politica-de-cookies");

    aOmitirAlgunsItensDoNav.forEach ( a => {
        a.addEventListener("click", () => MenuHamburguer.omitirAlgunsItensDoNavNaJanelaDosArtigosSobreECookies());
    });  
});


