
class personalizacaoDaFicha {

    constructor(checkboxDeControl) {
        this.checkboxDeControl = checkboxDeControl;
    }

    denegrirAsCelulas () {
        const colunasDasCelulas = document.querySelectorAll(".col-de-inputs");
        let cb = this.checkboxDeControl;

        for (const col of colunasDasCelulas) {
            cb.checked 
                ? col.classList.add("readonly") 
                : col.classList.remove("readonly");
        }
    }

    protegerReadonlyCelsContraAcesso () {
        // Declaracao das Variáveis necessárias
        const observacao = document.querySelector("p.readonlycels-obs");
        const trechoDeRecomendacao = observacao.querySelector("span");
        let duracaoDeDisplay = 1200;
    
        // Mostrar Observação
        observacao.classList.add("on");
    
        // Recomendar "Dark readonly Cels"
        if(!this.checkboxDeControl.checked) {
            trechoDeRecomendacao.classList.add("show");
            duracaoDeDisplay = 3500;
        }
        else {
            trechoDeRecomendacao.classList.remove("show");
        }
      
        setTimeout(() => {
            observacao.classList.remove("on");
        }, duracaoDeDisplay);
    }

    confirmarEsvaziamento () {
        const ficha = document.querySelectorAll(".col-de-inputs input");
        let status = 0;

        for (let i = 0; i < ficha.length; i++) {
            if (ficha[i].value != "") {status++;} 
        }

        if(status>=1){
            const caixaDeConfirmacao = document.querySelector(".caixa-de-confirmacao");
            caixaDeConfirmacao.classList.add("on");
            Desfoque._100Viewport();
        } 
        else {
            const fichaVaziaObs = document.querySelector("p.ficha-vazia-obs")
            fichaVaziaObs.classList.add("on");

            setTimeout(() => {
                fichaVaziaObs.classList.remove("on");
            }, 1200);
        }
    }

    esvaziarFicha () {
        const ficha = document.querySelectorAll(".col-de-inputs input");

        // Ficha propriamente dita
        for (let p = 0; p < ficha.length; p++) {
            ficha[p].value = "";
            localStorage.removeItem(`cel${p}`);
        }

        const mesUsPsCategoriaData = document.querySelectorAll("input[type=text], #data-de-realizacao");
        const chaves = new Array ("mes", "us", "ps", "categoria", "data");

        for (let i = 0; i < mesUsPsCategoriaData.length; i++) {
            mesUsPsCategoriaData[i].value = "";
            localStorage.removeItem(`${chaves[i]}`);
        }  
    }

    fecharCaixaDeConfirmacao () {
        const caixaDeConfirmacao = document.querySelector(".caixa-de-confirmacao");
        caixaDeConfirmacao.classList.remove("on");
        Foco._100Viewport();
    }
}


window.addEventListener("load", () => {

    let checkboxDeControl = document.querySelector("#readonly-cels-darker");

    // INSTANCIAMENTO DA CLASSE
    let personalizacao = new personalizacaoDaFicha(checkboxDeControl);

    // Denegrir células no load do windows
    personalizacao.denegrirAsCelulas();

    // Denegrir as células com checkbox
    checkboxDeControl.addEventListener("change", () => {
        personalizacao.denegrirAsCelulas();
    });

    let readonlyCels = document.querySelectorAll(".col-de-inputs input[readonly]");
    for (const cel of readonlyCels) {
        cel.addEventListener("click", () => {
            personalizacao.protegerReadonlyCelsContraAcesso();
        }); 
    } 

    // Denegrir as celulas com teclas 
    document.addEventListener("keyup", (event) => {
        
        let tecla = event.keyCode;

        if ((event.ctrlKey) &&  (tecla == 32)) {
            if (!checkboxDeControl.checked) {
                checkboxDeControl.setAttribute("checked", "");
            } else {
                checkboxDeControl.removeAttribute("checked");
            }
            personalizacao.denegrirAsCelulas();
            localStorage.setItem("darkmode", checkboxDeControl.checked);
        }
    })

    // ESVAZIAR FICHA

    // Confirmar esvaziamento
    const botaoEsvaziarFicha = document.querySelector("button.esvaziar-ficha");
    botaoEsvaziarFicha.addEventListener("click", () => {
        personalizacao.confirmarEsvaziamento();
    })

    // Esvaziar ficha propriamente dita
    const botaoEsvaziar = document.querySelector("button.esvaziar");

    botaoEsvaziar.addEventListener("click", () => {
        personalizacao.esvaziarFicha();
        personalizacao.fecharCaixaDeConfirmacao();
    })


    // Cancelar esvaziameto
    const botaoCancelar = document.querySelector("button.cancelar");
    botaoCancelar.addEventListener("click", () => {
        personalizacao.fecharCaixaDeConfirmacao();
    })
});