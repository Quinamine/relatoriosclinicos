
const faixasEtarias = ["0-4 anos", "5-9 anos", "10-14 anos", "15-19 anos", "20/ + anos"];
const sexo = ["&minus;", "F", "M"];



const Referencia = {

    mostrarFaixaEtariaESexo (outputFaixaEtaria, outputSexo) {
        const celulas = document.querySelectorAll(".linha input");

        celulas.forEach ( celula => {
            celula.addEventListener("focus", function() {  
                
                if(celula.hasAttribute("readonly")) return false;
                
                const elementoPai = celula.parentElement;
                const inputsFilhosDoElementoPai = elementoPai.querySelectorAll("input");

                let indiceDaCelula;
                for ( let i = 0; i < inputsFilhosDoElementoPai.length; i++) {
                    if(inputsFilhosDoElementoPai[i] == celula) indiceDaCelula = i;
                }
                
                // FAIXA ETÁRIA
                let faixaEtariaIndex;
                if(indiceDaCelula<2) faixaEtariaIndex = indiceDaCelula;
                else if(indiceDaCelula<4) faixaEtariaIndex = 2;
                else if(indiceDaCelula<6) faixaEtariaIndex = 3;
                else if(indiceDaCelula<8) faixaEtariaIndex = 4;

                // SEXO
                let sexoIndex;
                if(indiceDaCelula < 2) sexoIndex = 0;
                else if(indiceDaCelula%2==0) sexoIndex = 1;
                else sexoIndex = 2;

                // SAIDA
                outputFaixaEtaria.textContent = faixasEtarias[faixaEtariaIndex];
                outputSexo.innerHTML = sexo[sexoIndex];
            })
        })
    },

    retornarReferenciaVazia (outputFaixaEtaria, outputSexo) {
        outputFaixaEtaria.innerHTML = "";
        outputSexo.innerHTML = "";
    },

    mostrarOuOmitirRef () {
        const referencia = document.querySelector(".linha-de-referencia");
        const cabecalhoDaFicha = document.querySelector(".linha-de-faixas-etarias-e-sexo-2");
        let posicao = cabecalhoDaFicha.getBoundingClientRect().bottom;

        if(window.innerWidth > 1023) posicao = cabecalhoDaFicha.getBoundingClientRect().top;

        posicao < 0 ? referencia.classList.add("on") : referencia.classList.remove("on");
    }
}

let outputFaixaEtaria, outputSexo;
window.addEventListener("load", () => {
    outputFaixaEtaria = document.querySelector("output.faixa-etaria");
    outputSexo = document.querySelector("output.sexo");

    Referencia.mostrarFaixaEtariaESexo(outputFaixaEtaria, outputSexo);

});

// Omitir a linha de referência quando a linha de Faixas-etárias e Sexo estiver visível
window.addEventListener("scroll", () =>  Referencia.mostrarOuOmitirRef());  


// Retornar Referência vazia se o foco for fora das celulas
window.addEventListener("click", event => {
    if (!event.target.matches("input[data-totalgeraleixox")) {
        Referencia.retornarReferenciaVazia(outputFaixaEtaria, outputSexo);
    }
});








