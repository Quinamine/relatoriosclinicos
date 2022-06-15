
const faixasEtarias = ["0 - 11 meses", "1 - 4 anos", "5 - 14 anos", "15 - 24 anos", "25 - 59 anos", "&ge; 60 anos"];
const sexo = ["F", "M"];

function mostrarReferencia (outputFaixaEtaria, outputSexo) {
    const colunas = document.querySelectorAll(".col-de-inputs");
    const celulas = document.querySelectorAll(".col-de-inputs input");

    for (let i = 0; i < celulas.length; i++) {
        celulas[i].addEventListener("focus", () => {

            if (celulas[i].hasAttribute("readonly")) return false;
            
            let currentCelParent = celulas[i].parentElement;
            let parentIndex;

            for (let p = 0; p < colunas.length; p++) {
                if(colunas[p] == currentCelParent) {
                    parentIndex = p;
                }
            }

            // FAIXA ETÁRIA
            let faixaEtariaIndex;
            if(parentIndex < 2) {faixaEtariaIndex = 0;}
            else if(parentIndex < 4) {faixaEtariaIndex = 1}
            else if(parentIndex < 6) {faixaEtariaIndex = 2}
            else if(parentIndex < 10) {faixaEtariaIndex = 3}
            else if(parentIndex < 12) {faixaEtariaIndex = 4}
            else if(parentIndex < 14) {faixaEtariaIndex = 5}

            // SEXO
            let sexoIndex;
            if ((parentIndex + 1)%2==0) {sexoIndex = 1;} 
            else {sexoIndex = 0;}

            // OUTPUT

            outputFaixaEtaria.innerHTML = faixasEtarias[faixaEtariaIndex];
            outputSexo.innerHTML = sexo[sexoIndex];
        })
    }
}


window.addEventListener("load", () => {
    const outputFaixaEtaria = document.querySelector("output.faixa-etaria");
           const outputSexo = document.querySelector("output.sexo");


    mostrarReferencia(outputFaixaEtaria, outputSexo);
})