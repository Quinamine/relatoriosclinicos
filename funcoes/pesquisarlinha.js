

class Pesquisa {

    constructor(caixadePesquisa, campodePesquisa) {
        this.caixadePesquisa = caixadePesquisa;
        this.campodePesquisa = campodePesquisa;
    }

    mostrarCaixadePesquisa() {
        this.caixadePesquisa.classList.add("on");

        this.campodePesquisa.removeAttribute("readonly");
        this.campodePesquisa.focus();
        
        let query = this.campodePesquisa.value;
        if(query != "") {
            this.campodePesquisa.select();
        }
    }

    omitirCaixadePesquisa() {
        this.caixadePesquisa.classList.remove("on");
        this.campodePesquisa.value = "";
    }

    pesquisarLinha(query) {

        if (query == "") {
            this.mostrarCaixadePesquisa();
            this.css().resetarBgdasLinhas();
            return false;
        }

        else if ((query < 1) || (query > 53)) {   
            this.css().resetarBgdasLinhas();
            this.omitirCaixadePesquisa();
            this.nothingFound(1);
            return false;
        } 

        const linhas = document.querySelectorAll(".col-de-enumeracao-das-linhas span");
        let iRow = query - 1;
        this.css().suavizarRolagemHTML("sim");
        
        if ((linhas[iRow].getBoundingClientRect().bottom < 0) || linhas[iRow].getBoundingClientRect().top > window.innerHeight) {
            linhas[iRow].scrollIntoView();
        }
       
        this.css().resetarBgdasLinhas();
        linhas[iRow].classList.add("fundo-laranja");
    }

    nothingFound(status) {
        const querySemResultados = document.querySelector("div.query-sem-resultados");

        if(status) {
            querySemResultados.classList.add("on");
        }
        else {
            querySemResultados.classList.remove("on");
        }
    }

    // ESTILOS

    css() {
        return this.Efeitos = {

            suavizarRolagemHTML: preferencia => {
                let html = document.querySelector("html");

                if (preferencia == "sim") {
                    html.classList.add("smooth");
                } else {
                    html.classList.remove("smooth");
                } 
            },

            resetarBgdasLinhas: () => {

                const linhas = document.querySelectorAll(".col-de-enumeracao-das-linhas span");
                
                for (const linha of linhas) {
                    if (linha.classList.contains("fundo-laranja")) {
                        linha.classList.remove("fundo-laranja");
                    }
                }
            }
            
        }
    }
}


window.addEventListener("load", () =>  {

    // Variáveis para a passagem como parâmetros 
    const caixadePesquisa = document.querySelector("div.caixa-de-pesquisa");
    const campodePesquisa = document.querySelector("input.pesquisar-linha");


    // EVENT LISTENERS
    const aIrPara = document.querySelector("a.ir-para");
    const botaoXdaCaixadePesquisa = document.querySelector("div.caixa-de-pesquisa button.fechar");
    const botaoIrdacaixadePesquisa = document.querySelector("div.caixa-de-pesquisa button.ir");
    const botaoOkdeQuerySemResultados = document.querySelector("div.query-sem-resultados button");

    // INSTANCIAMENTO DA CLASSE
    let src = new Pesquisa(caixadePesquisa, campodePesquisa);

    // ABRIR A CAIXA DE PESQUISA
    aIrPara.addEventListener("click", () => { 
        src.mostrarCaixadePesquisa();
    });

    // FECHAR A CAIXA DE PESQUISA 
    botaoXdaCaixadePesquisa.addEventListener("click", () => {
        src.omitirCaixadePesquisa();
        src.css().resetarBgdasLinhas();
    })

    // IR PARA LINHA
    botaoIrdacaixadePesquisa.addEventListener("click", () => {
        let retornodaPesquisa = src.pesquisarLinha(campodePesquisa.value);
        src.css().resetarBgdasLinhas();

        if(retornodaPesquisa != false) {
            src.omitirCaixadePesquisa();
        }
    })

    // FECHAR
    botaoOkdeQuerySemResultados.addEventListener("click", () => {
        src.nothingFound();
        src.css().resetarBgdasLinhas();
    })

    // ENCONTRAR ATRAVES DO KEY UP
    campodePesquisa.addEventListener("keyup", () => {
        src.pesquisarLinha(campodePesquisa.value);
    })


    /// ENCONTRAR ATRAVES DO MOUSE UP
    campodePesquisa.addEventListener("mouseup", () => {
        src.pesquisarLinha(campodePesquisa.value);
    })

    // EVENTOS DO TECLADO
    window.addEventListener("keyup", (event) => {
        
        let tecla = event.key.toLowerCase();

        
        // ABRIR CAIXA DE PESQUISA
        if ((event.ctrlKey) &&  (tecla == "b")) {
            src.mostrarCaixadePesquisa();
        }

        // FECHAR QUERY SEM RESULTADOS COM ENTER
        if (tecla == "enter") {
            // Fechar caixa de query sem resultados
            src.nothingFound();
            src.css().resetarBgdasLinhas();
        }


        
    })

});