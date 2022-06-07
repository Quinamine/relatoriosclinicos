
class PersonalizacaodaFicha {

    constructor(checkboxdeControl) {
        this.checkboxdeControl = checkboxdeControl;
    }

    denegrirAsCelulas () {
        const colunasdasCelulas = document.querySelectorAll(".col-de-inputs");
        let cb = this.checkboxdeControl;

        for (const col of colunasdasCelulas) {
            cb.checked 
                ? col.classList.add("readonly") 
                : col.classList.remove("readonly");
        }
    }

    protegerAcesssoAreadonlyCels () {
        // Declaracao das Variáveis necessárias
        const observacao = document.querySelector("p.readonlycels-obs");
        const trechodeObs = document.querySelector("p.readonlycels-obs span");
        let tempodeObs = 1200;
    
        // Mostrar Observação
        observacao.classList.add("on");
    
        // Recomendar "Dark readonly Cels"
        if(!this.checkboxdeControl.checked) {
            trechodeObs.classList.add("show");
            tempodeObs = 3500;
        }
        else {
            trechodeObs.classList.remove("show");
        }
      
        setTimeout(() => {
            observacao.classList.remove("on");
        }, tempodeObs);
    }

    confirmarEsvaziamento () {
        const ficha = document.querySelectorAll(".col-de-inputs input");
        let status = 0;

        for (let i = 0; i < ficha.length; i++) {
            if (ficha[i].value != "") {status++;} 
        }

        if(status>=1){
            const caixadeConfirmacao = document.querySelector(".caixa-de-confirmacao");
            caixadeConfirmacao.classList.add("on");
            desfocarFundo(1)
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

    fecharCaixadeConfirmacao () {
        const caixadeConfirmacao = document.querySelector(".caixa-de-confirmacao");
        caixadeConfirmacao.classList.remove("on");
        desfocarFundo(0)
    }
}


window.addEventListener("load", () => {

    let checkboxdeControl = document.querySelector("#readonly-cels-darker");

    // INSTANCIAMENTO DA CLASSE
    let personalizacao = new PersonalizacaodaFicha(checkboxdeControl);

    // Denegrir células no load do windows
    personalizacao.denegrirAsCelulas();

    // Denegrir as células com checkbox
    checkboxdeControl.addEventListener("change", () => {
        personalizacao.denegrirAsCelulas();
    });

    let readonlyCels = document.querySelectorAll(".col-de-inputs input[readonly]");
    for (const cel of readonlyCels) {
        cel.addEventListener("click", () => {
            personalizacao.protegerAcesssoAreadonlyCels();
        }); 
    } 

    // Denegrir as celulas com teclas 
    document.addEventListener("keyup", (event) => {
        
        let tecla = event.keyCode;

        if ((event.ctrlKey) &&  (tecla == 32)) {
            if (!checkboxdeControl.checked) {
                checkboxdeControl.setAttribute("checked", "");
            } else {
                checkboxdeControl.removeAttribute("checked");
            }
            personalizacao.denegrirAsCelulas();
            localStorage.setItem("darkmode", checkboxdeControl.checked);
        }
    })


    // ESVAZIAR FICHA

    // Confirmar esvaziamento
    const aEsvaziarFicha = document.querySelector("a.esvaziar-ficha");
    aEsvaziarFicha.addEventListener("click", () => {
        personalizacao.confirmarEsvaziamento();
    })

    // Esvaziar ficha propriamente dita
    const botaoEsvaziar = document.querySelector("button.esvaziar");

    botaoEsvaziar.addEventListener("click", () => {
        personalizacao.esvaziarFicha();
        personalizacao.fecharCaixadeConfirmacao();
    })


    // Cancelar esvaziameto
    const botaoCancelar = document.querySelector("button.cancelar");
    botaoCancelar.addEventListener("click", () => {
        personalizacao.fecharCaixadeConfirmacao();
    })
})