
const Menu = {
    abrirOuFecharAba: (accao, aba) => {
        if(accao == "abrir") { 
            aba.classList.add("on");
            Desfoque._100Viewport();
        }
        else {
            aba.classList.remove("on");
            Foco._100Viewport();
        }     
    },


    abrirHamburguer: () => {
        hamburguer.classList.add("on");
        nav.classList.add("on");
        body.classList.add("hide-overflow");
        Desfoque.abaixoDoCabecalho();
    }, 


    fecharHamburguer: () => {
        hamburguer.classList.remove("on");
        nav.classList.remove("on");
        body.classList.remove("hide-overflow");
        Foco._100Viewport();
    },


    fixarMenu: () => {
        const header = document.querySelector("header");
        header.classList.add("sticky");
        body.classList.add("hide-overflow");
    },


    desafixarMenu: () => {
        const header = document.querySelector("header");
        header.classList.remove("sticky");
        body.classList.remove("hide-overflow");
    }


}


let hamburguer, nav, body;
window.addEventListener ("load", () => {

    // Abrir e Fechar conteúdo de atalhos
    try {
        const conteudodeAtalhos = document.querySelector("section.atalhos-do-teclado");

        const aAbrirAtalhos = document.querySelector("a.abrir-atalhos-do-teclado");
        aAbrirAtalhos.addEventListener("click", () => {
            Menu.abrirOuFecharAba("abrir", conteudodeAtalhos);
        });

        const botaoFecharAtalhos = document.querySelector("button.fechar-atalhos");
        botaoFecharAtalhos.addEventListener("click", () => {
            Menu.abrirOuFecharAba("fechar", conteudodeAtalhos);
        });
    } catch (error) {
        console.log(`Bloco de instrução aplicável somente para PC. ->  ${error.message}.`);
    }
    

    // Abrir e Fechar conteúdo de cookies
    const conteudodeCookies = document.querySelector("article.politica-de-cookies");

    const aAbrirCookies = document.querySelectorAll("a.abrir-politica-de-cookies"); 
    aAbrirCookies.forEach ( a => {
        a.addEventListener("click", () => {
            Menu.abrirOuFecharAba("abrir", conteudodeCookies);
        })
    } )

    const botaoFecharCookies = document.querySelector("button.fechar-artigo.cookies");
    botaoFecharCookies.addEventListener("click", () => {
        Menu.abrirOuFecharAba("fechar", conteudodeCookies);
    });


    // Abrir e Fechar conteúdo de sobre
    const conteudoSobre = document.querySelector("article.sobre");

    const aAbrirConteudoSobre = document.querySelectorAll("a.abrir-conteudo-sobre");
    
    aAbrirConteudoSobre.forEach ( a => {
        a.addEventListener("click", () => {
            Menu.abrirOuFecharAba("abrir", conteudoSobre);
        })
    })

    const botaoFecharSobre = document.querySelector("button.fechar-artigo.sobre");
    botaoFecharSobre.addEventListener("click", () => {
        Menu.abrirOuFecharAba("fechar", conteudoSobre);
    });

    // MENU MOBILE 

    try {
        hamburguer = document.querySelector(".hamburguer");
              body = document.querySelector("body");
               nav = document.querySelector(".linha-do-cabecalho nav");

            // Abrir ou fechar nav com hamburguer
            hamburguer.addEventListener("click", () => {
               
                if(hamburguer.classList.contains("on")) {
                    Menu.fecharHamburguer();
                } else {
                    Menu.abrirHamburguer();
                }
            });


            // Fechar nav com clique nos menuItens
            const menuItens = document.querySelectorAll("header nav ul li:nth-child(1), header nav ul li a");
            menuItens.forEach( item => {
                item.addEventListener("click", () => {
                    Menu.fecharHamburguer();
                })
            });

    } catch (error) {
        console.log(`Bloco de instrução aplicável somente para Mobile e Tablet. ->  ${error.message}.`);
    }
    
    
})