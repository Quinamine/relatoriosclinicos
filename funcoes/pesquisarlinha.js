

class Pesquisa {

    constructor(caixaDePesquisa, campoDePesquisa) {
        this.caixaDePesquisa = caixaDePesquisa;
        this.campoDePesquisa = campoDePesquisa;
    }

    mostrarCaixaDePesquisa() {
        this.caixaDePesquisa.classList.add("on");

        this.campoDePesquisa.removeAttribute("readonly");
        this.campoDePesquisa.focus();
        
        let query = this.campoDePesquisa.value;
        if(query != "") {
            this.campoDePesquisa.select();
        }
    }

    omitirCaixaDePesquisa() {
        this.caixaDePesquisa.classList.remove("on");
        this.campoDePesquisa.value = "";
    }

    pesquisarLinha(query) {

        if (query == "") {
            this.mostrarCaixaDePesquisa();
            this.resetarBgdasLinhas();
            return false;
        }

        else if ((query < 1) || (query > 53)) {   
            this.resetarBgdasLinhas();
            this.omitirCaixaDePesquisa();
            this.nothingFound(1);
            return false;
        } 

        const linhas = document.querySelectorAll(".coluna-de-enumeracao-das-linhas span");
        let iRow = query - 1;
        
        
        if ((linhas[iRow].getBoundingClientRect().bottom < 0) || linhas[iRow].getBoundingClientRect().top > window.innerHeight) {
            if(iRow < 3) {
                const body = document.querySelector("body");
                body.scrollIntoView();
            }
            else {
                linhas[iRow-3].scrollIntoView();
            }
            
        }
        
        this.resetarBgdasLinhas();
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

    resetarBgdasLinhas () {

        const linhas = document.querySelectorAll(".coluna-de-enumeracao-das-linhas span");
        
        for (const linha of linhas) {
            linha.classList.remove("fundo-laranja");
        }
    }
}


window.addEventListener("load", () =>  {

    // Variáveis para a passagem como parâmetros 
    const caixaDePesquisa = document.querySelector("div.caixa-de-pesquisa");
    const campoDePesquisa = document.querySelector("input.pesquisar-linha");


    // EVENT LISTENERS
    const botaoIrPara = document.querySelector("button.ir-para");
    const botaoXdaCaixaDePesquisa = document.querySelector("div.caixa-de-pesquisa button.fechar");
    const botaoOkDeQuerySemResultados = document.querySelector("div.query-sem-resultados button");

    // INSTANCIAMENTO DA CLASSE
    let src = new Pesquisa(caixaDePesquisa, campoDePesquisa);

    // ABRIR A CAIXA DE PESQUISA
    botaoIrPara.addEventListener("click", () => { 
        src.mostrarCaixaDePesquisa();
    });

    // FECHAR A CAIXA DE PESQUISA 
    botaoXdaCaixaDePesquisa.addEventListener("click", () => {
        src.omitirCaixaDePesquisa();
        src.resetarBgdasLinhas();
    })

    // FECHAR
    botaoOkDeQuerySemResultados.addEventListener("click", () => {
        src.nothingFound();
        src.resetarBgdasLinhas();
    })

    // ENCONTRAR ATRAVES DO KEY UP
    campoDePesquisa.addEventListener("keyup", () => {
        src.pesquisarLinha(campoDePesquisa.value);
    })

    /// ENCONTRAR ATRAVES DO MOUSE UP
    campoDePesquisa.addEventListener("mouseup", () => {
        src.pesquisarLinha(campoDePesquisa.value);
    })

    // EVENTOS DO TECLADO
    window.addEventListener("keyup", (event) => {
        
        let tecla = event.key;

        
        // ABRIR CAIXA DE PESQUISA
        if ((event.ctrlKey) &&  (tecla.toLowerCase() == "b")) {
            src.mostrarCaixaDePesquisa();
        }

        // FECHAR QUERY SEM RESULTADOS COM ENTER
        if (tecla.toLocaleLowerCase() == "enter") {
            // Fechar caixa de query sem resultados
            if(botaoOkDeQuerySemResultados.parentElement.classList.contains("on")) {
                src.nothingFound();
                src.resetarBgdasLinhas();
            }  
        }
        
    })

});