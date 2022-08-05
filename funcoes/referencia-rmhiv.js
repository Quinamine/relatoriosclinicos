
const faixasEtarias = ["0-4 anos", "5-9 anos", "10-14 anos", "15-19 anos", "20 /+ anos"];
const sexo = ["F", "M"];



const Referencia = {

    mostrarIdadeESexo (outputFaixaEtaria, outputSexo) {
        const celulas = document.querySelectorAll(".linha input");
    
        /*for (let i = 0; i < celulas.length; i++) {
            celulas[i].addEventListener("focus", () => {
    
                if (celulas[i].hasAttribute("readonly")) return false;
                
                let currentCelParent = celulas[i].parentElement;
                let parentIndex;
    
                for (let index = 0; index < colunas.length; index++) {
                    if(colunas[index] == currentCelParent) {
                        parentIndex = index;
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
    */},

    retornarReferenciaVazia (outputFaixaEtaria, outputSexo) {
        outputFaixaEtaria.innerHTML = "";
        outputSexo.innerHTML = "";
    },

    mostrarOuOmitirRef () {
        const referencia = document.querySelector(".linha-de-referencia");
        const cabecalhoDaFicha = document.querySelector(".linha-de-faixas-etarias-e-sexo-2");
        const posicao = cabecalhoDaFicha.getBoundingClientRect().bottom;

        posicao < 0 ? referencia.classList.add("on") : referencia.classList.remove("on");
    }
}


window.addEventListener("load", () => {
    const outputFaixaEtaria = document.querySelector("output.faixa-etaria");
    const outputSexo = document.querySelector("output.sexo");

    Referencia.mostrarIdadeESexo(outputFaixaEtaria, outputSexo);

    // Retornar Referência vazia se o foco for fora das celulas
    window.addEventListener("click", event => {
        if (!event.target.matches("input[data-subtotal]")) {
            Referencia.retornarReferenciaVazia(outputFaixaEtaria, outputSexo);
        }
    })

    // Omitir a linha de referência quando a linha de Faixas-etárias e Sexo estiver visível
    window.addEventListener("scroll", () =>  Referencia.mostrarOuOmitirRef());  
})




