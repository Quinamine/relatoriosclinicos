const  menu = {

    destacarReadonlyInputs() {
        const readonlyInputs = document.querySelectorAll("input[readonly]");
        const readonlyInputsDarker = document.querySelector("#readonlyinputs-darker");

        for (const input of readonlyInputs) {
            readonlyInputsDarker.checked ? input.classList.add("gray") : input.classList.remove("gray");
        }
    },

    restringirAcessoAReadonlyInputs() {
        const aviso = document.querySelector(".aviso-de-restricao-de-acesso-a-readonlyinputs");
        const recomendacao = aviso.querySelector("span.recomendacao");
        const readonlyInputsDarker = document.querySelector("#readonlyinputs-darker");
        let duracaoDoAviso = 3000;

        aviso.classList.add("on");

        if(readonlyInputsDarker.checked) {
            recomendacao.classList.remove("on");
        }
        else {
            recomendacao.classList.add("on");
            duracaoDoAviso = 6000;
        }
        setTimeout( () => {aviso.classList.remove("on");}, duracaoDoAviso);
    },

    esvaziamento() {
        const confirmacao = document.querySelector(".caixa-de-confirmacao");
        const celulas = document.querySelectorAll(".grade input");
        return {
            mostrarCaixaDeConfirmacao: () => {
                let celulasPreenchidas = 0;
                for (const cel of celulas) {
                    cel.value != "" && celulasPreenchidas++;
                }

                if(celulasPreenchidas > 0) {
                    confirmacao.classList.add("on");
                    desfocarFundo();
                }
                else {
                    const alerta = document.querySelector(".alerta-para-ficha-vazia");
                    alerta.classList.add("on");
                    setTimeout ( () => alerta.classList.remove("on"), 2000);
                }
            },

            omitirCaixaDeConfirmacao: () => {
                confirmacao.classList.remove("on");
                focarFundo();
            },

            limparDados: () => {   
                const limpadoresDeDadosAdicionais = document.querySelectorAll(".limpadores-de-dados-adicionais input");

                for (let i = 0; i < celulas.length; i++) {
                    celulas[i].value = "";
                    localStorage.removeItem(`trmhiv-c${i}`);
                    celulas[i].classList.remove("bg-red");
                };

                limpadoresDeDadosAdicionais.forEach ( limpador => {
                    if(limpador.checked) {
                        const IdDoDadoAdicional = limpador.dataset.for; 
                        const dadoAdicional = document.querySelector(`#${IdDoDadoAdicional}`);
                        dadoAdicional.value = "";
                        localStorage.removeItem(`trmhiv-${IdDoDadoAdicional}`);
                    }
                }); 
                focarFundo();  
            }
        }
    }
}   

window.addEventListener("load", () => {
    // Destacar células
    const readonlyInputsDarker = document.querySelector("#readonlyinputs-darker");
    readonlyInputsDarker.addEventListener("change", () => menu.destacarReadonlyInputs());

    // Esvaziar Ficha
    const botaoEsvaziar = document.querySelector(".esvaziar-ficha");
    botaoEsvaziar.addEventListener("click", () => menu.esvaziamento().mostrarCaixaDeConfirmacao());

    const botaoCancelar = document.querySelector(".cancelar");
    botaoCancelar.addEventListener("click", () =>  menu.esvaziamento().omitirCaixaDeConfirmacao());

    const botaoConfirmar = document.querySelector(".confirmar");
    botaoConfirmar.addEventListener("click", () => {
        menu.esvaziamento().limparDados();
        menu.esvaziamento().omitirCaixaDeConfirmacao();
    });

    // Restricao de acesso a Readonly Inputs
    const readonlyInputElements = document.querySelectorAll(".ficha input[readonly]");
    readonlyInputElements.forEach ( inputElement => {
        inputElement.addEventListener("click", () =>  menu.restringirAcessoAReadonlyInputs());
    });
    
})



