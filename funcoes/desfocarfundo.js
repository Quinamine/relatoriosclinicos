const Desfoque = {

    _100Viewport: () => {
        desfoque.classList.add("on");
    },

    abaixoDoCabecalho: () => {
        desfoque.classList.add("on");
        desfoque.classList.add("parcial");
    },
}

const Foco = {
    _100Viewport: () => {
        let janelasAbertas = 0;

        for (let p = 0; p < janelasDesfocantes.length; p++) {
            if(janelasDesfocantes[p].classList.contains("on")) {
                janelasAbertas++;
            }
        }

        if (janelasAbertas == 0) {
            desfoque.classList.remove("on");
        } else { 
            return false;
        }
    },

    abaixoDoCabecalho: () => {
        desfoque.classList.remove("on");
    },
}


let desfoque, janelasDesfocantes;
window.addEventListener("load", () => {
    desfoque = document.querySelector(".desfoque-do-fundo");
    janelasDesfocantes = document.querySelectorAll("div.caixa-de-confirmacao, .atalhos-do-teclado, article.politica-de-cookies, article.sobre, div.hamburguer");

    
})