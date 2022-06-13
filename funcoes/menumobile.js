
const MenuHamburguer = {

    abrirOuFechar(accao) {

        if(accao=="abrir") {
            hamburguer.classList.add("on");
            nav.classList.add("on");
            Desfoque.abaixoDoCabecalho();
        }
        else {
            hamburguer.classList.remove("on");
            nav.classList.remove("on");
            Foco._100Viewport();
        }
    },


    omitirRolagemBody() {
        body.classList.add("hide-overflow");
    },

    desomitirRolagemBody() {

        const artigos = document.querySelectorAll("article");

        for (i=0; i<artigos.length; i++) {
            if(artigos[i].classList.contains("on")) {
                return false
            }
        }
        body.classList.remove("hide-overflow");
    }
}

let hamburguer, nav, body;
window.addEventListener("load", () => {
    // Inicialização das variáveis
    hamburguer = document.querySelector(".hamburguer");
    nav = document.querySelector("header nav")
    body = document.querySelector("body");

    // Eventos 
    hamburguer.addEventListener("click", () => {
        
        if(hamburguer.classList.contains("on")) {
            MenuHamburguer.abrirOuFechar("fechar");
            MenuHamburguer.desomitirRolagemBody()
            desfoque.classList.remove("z-index-9");
        }
        else {
            MenuHamburguer.abrirOuFechar("abrir");
            MenuHamburguer.omitirRolagemBody();
            desfoque.classList.add("z-index-9");
        }

        Foco.destacarConteudo(nav);
    })


    // Fechar Hamburguer com Itens do Menu
    const menuItens = document.querySelectorAll("header nav ul li:nth-child(1), header nav ul li a");

    menuItens.forEach ( item => {   
        item.addEventListener("click", () => {
            MenuHamburguer.abrirOuFechar("fechar");
            MenuHamburguer.desomitirRolagemBody();
            desfoque.classList.remove("z-index-9");
        })
    });


    // Footer Menu Itens
    const aAbrirArtigosDoRodape = document.querySelectorAll("footer a.abrir-conteudo-sobre, a.abrir-politica-de-cookies");
    const header = document.querySelector("header");

    aAbrirArtigosDoRodape.forEach ( a => {
        a.addEventListener("click", () => {
            MenuHamburguer.omitirRolagemBody();

            // Fixar Menu
            header.classList.add("sticky");
            header.classList.add("z-index-10");
        })
    })


    // Desomitir Rolagem Body com Botoes do artigo
    const botoesFecharArtigo = document.querySelectorAll("button.fechar-artigo");

    botoesFecharArtigo.forEach( botao => {
        botao.addEventListener("click", () => {
            MenuHamburguer.desomitirRolagemBody();

        });
    })

})
