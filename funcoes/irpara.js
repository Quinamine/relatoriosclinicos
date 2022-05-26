

const Pesquisa = {

    abrirCaixadePesquisa: (caixadePesquisa, campodePesquisa) => {
        caixadePesquisa.classList.add("on");
        campodePesquisa.focus();

        if(campodePesquisa.value != "") {
            campodePesquisa.select();
        }
    },

    fecharCaixadePesquisa: (caixadePesquisa, campodePesquisa) => {
        caixadePesquisa.classList.remove("on");
        campodePesquisa.value = "";
    },

    fecharQuerySemResultados: (q) => {
        q.classList.remove("on");
    },

    pesquisar: (query) => {
        const linhas = document.querySelectorAll(".col-de-enumeracao-das-linhas span");

        if ((query < 1) || (query > 53)) {    
            document.querySelector("div.query-sem-resultados").classList.add("on");
            EfeitosCss.resetarBgdasLinhas(linhas);
            return false;
        } 
            
        EfeitosCss.suavizarRolagemHTML("y"); // Suavizar scroll HTML antes do efeito scrollIntoView
        
        let indexRow = query - 1;
        linhas[indexRow].scrollIntoView();

        EfeitosCss.resetarBgdasLinhas(linhas);
        linhas[indexRow].classList.add("fundo-laranja");   
    }
}

const EfeitosCss = {
    suavizarRolagemHTML: (preferencia) => {
        const html = document.querySelector("html");

        if (preferencia == "y") {    
            html.classList.add("smooth");

        } else {
            html.classList.remove("smooth");
        }
    },

    resetarBgdasLinhas: (linhas) => {
        for (const linha of linhas) {
            if(linha.classList.contains("fundo-laranja")) {
                linha.classList.remove("fundo-laranja");
            }
        }
    }
}


window.addEventListener("load", () => {
    const linkIrPara = document.querySelector("a.ir-para");
    const botaoFecharCaixadePesquisa = document.querySelector("button.fechar");
    const caixadePesquisa = document.querySelector("div.caixa-de-pesquisa");
    const campodePesquisa = document.querySelector("input.pesquisar-linha");
    const botaoPesquisar = document.querySelector("button.ir");
    const querySemResultados = document.querySelector("div.query-sem-resultados");
    const linhas = document.querySelectorAll(".col-de-enumeracao-das-linhas span");
    

    // Abrir caixa de pesquisa
    linkIrPara.addEventListener("click", () => {
        Pesquisa.abrirCaixadePesquisa(caixadePesquisa, campodePesquisa);
    })

    // Fechar caixa de pesquisa
    botaoFecharCaixadePesquisa.addEventListener("click", () => {
        Pesquisa.fecharCaixadePesquisa(caixadePesquisa, campodePesquisa);
        EfeitosCss.resetarBgdasLinhas(linhas);
    });

    // Pesquisar
    botaoPesquisar.addEventListener("click", () => {
        let query = campodePesquisa.value;
        if(query == "") {
            campodePesquisa.focus();
            return false;
        } else {
            Pesquisa.pesquisar(query);
            Pesquisa.fecharCaixadePesquisa(caixadePesquisa, campodePesquisa);
            EfeitosCss.suavizarRolagemHTML("n");
            EfeitosCss.resetarBgdasLinhas(linhas);
        }
    });

    // Fechar query Sem resultados 
    document.querySelector("div.query-sem-resultados button").addEventListener("click", () => {
        Pesquisa.fecharQuerySemResultados(querySemResultados);
        campodePesquisa.select();
    });

    /* Destacar linha com fundo laranja */
    function encontrarEdestacarLinha () {
        if(campodePesquisa.value == "") {
            campodePesquisa.focus();
            EfeitosCss.resetarBgdasLinhas(linhas);
            return false;
        }
        Pesquisa.pesquisar(campodePesquisa.value);
    }

    campodePesquisa.addEventListener("keyup", () => {
        encontrarEdestacarLinha();
    })

    campodePesquisa.addEventListener("mouseup", () => {
        encontrarEdestacarLinha();
    })
})


