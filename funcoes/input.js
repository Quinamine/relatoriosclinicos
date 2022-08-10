
const input = {

    diminuirTamanhoDaFonte: () => {
        for (const c of celulas) {
            // Reset 
            c.classList.remove("font11");
            c.classList.remove("bg-red");
    
            let algarismos = c.value.length;
            if(algarismos >=7) {
                c.classList.add("font11");
                algarismos > 7 && c.classList.add("bg-red");
            };
        }
    },

    mostrarMotivoPeloFundoVermelho: () => {
        if(!sessionStorage.getItem("nao-mostrar-mais")) {
            motivo.classList.add("on");
            desfocarFundo();
        }
    },

    omitirMotivoPeloFundoVermelho: () => {
        motivo.classList.remove("on");
        focarFundo();
    },

    salvarPreferenciaNaoMostrarMais: () => {
        const checkboxPreference = document.querySelector("#nao-mostrar-mais");
        if(checkboxPreference.checked) {
            sessionStorage.setItem("nao-mostrar-mais", "redcels-obs");
        } else {
            sessionStorage.removeItem("nao-mostrar-mais");
        }
    }
}


let celulas, motivo;
window.addEventListener("load", () => {
    celulas = document.querySelectorAll(".coluna-de-inputs input");
    motivo = document.querySelector(".razao-pelas-celulas-com-fundo-vermelho");
    const btnOmitirMotivo = document.querySelector(".close-redcels-obs");

    // Diminuir FontSize e Mostrar Razão de Red Cels
    celulas.forEach ( cel => {
        cel.addEventListener("input", function() {
            input.diminuirTamanhoDaFonte();

            const subtotalCel = document.querySelector(`.${cel.dataset.subtotaloutput}`);
            if( (cel.classList.contains("bg-red")) || 
            (subtotalCel.classList.contains("bg-red")) ) {
                setTimeout(input.mostrarMotivoPeloFundoVermelho, 2500);
            }
        });
    });

    // Omitir Motivo de Red Cels
    btnOmitirMotivo.addEventListener("click", () => {
        input.omitirMotivoPeloFundoVermelho();
        input.salvarPreferenciaNaoMostrarMais();
    });

    // NO LOAD DO WINDOWS
    input.diminuirTamanhoDaFonte();
})