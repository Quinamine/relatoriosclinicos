
class PersonalizacaodaFicha {

    constructor(checkboxdeControl) {
        this.checkboxdeControl = checkboxdeControl;
    }

    activarCheckbox () {
        let cb = this.checkboxdeControl;
        cb.checked 
            ? cb.parentElement.classList.add("activo") 
            : cb.parentElement.classList.remove("activo");
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
}


window.addEventListener("load", () => {

    let checkboxdeControl = document.querySelector("#readonly-cels-darker");

    // INSTANCIAMENTO DA CLASSE
    let personalizacao = new PersonalizacaodaFicha(checkboxdeControl);

    // INSTANCIAMENTO DA CLASSE
    checkboxdeControl.addEventListener("change", () => {
        personalizacao.activarCheckbox();
        personalizacao.denegrirAsCelulas();
    });

    let readonlyCels = document.querySelectorAll(".col-de-inputs input[readonly]");
    for (const cel of readonlyCels) {
        cel.addEventListener("click", () => {
            personalizacao.protegerAcesssoAreadonlyCels();
        }); 
    } 



})