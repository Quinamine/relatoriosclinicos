const  menu = {

    destacarReadonlyInputs() {
        const readonlyInputs = document.querySelectorAll("input[readonly]");
        const readonlyInputsDarker = document.querySelector("#readonlyinputs-darker");

        for (const input of readonlyInputs) {
            if(readonlyInputsDarker.checked) {
                input.classList.add("gray");
                input.parentElement.classList.add("gray"); // Para a ficha de Resumo Mensal de HIV
            }
            else {
                input.classList.remove("gray");
                input.parentElement.classList.remove("gray");
            }
        }
    },

    esvaziamento() {
        const confirmacao = document.querySelector(".caixa-de-confirmacao");
        const celulas = document.querySelectorAll(".coluna-de-inputs input");
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
                    localStorage.removeItem(`trmce-cel${i}`);
                };

                limpadoresDeDadosAdicionais.forEach ( limpador => {
                    if(limpador.checked) {
                        const IdDoDadoAdicional = limpador.dataset.for; 
                        const dadoAdicional = document.querySelector(`#${IdDoDadoAdicional}`);
                        dadoAdicional.value = "";
                        localStorage.removeItem(`trmce-${IdDoDadoAdicional}`);
                    }
                }); 

                focarFundo();  
            }
        }
    },


    abrirAtalhosDoTeclado() {
        const atalhosDoTeclado = document.querySelector(".atalhos-do-teclado");
        atalhosDoTeclado.classList.add("on");
        desfocarFundo();
    },

    fecharAtalhosDoTeclado() {
        const atalhosDoTeclado = document.querySelector(".atalhos-do-teclado");
        atalhosDoTeclado.classList.remove("on");
        focarFundo();
    }
}   


const desfocarFundo = () => divDesfocante.classList.add("on");
const focarFundo = () => divDesfocante.classList.remove("on");

let divDesfocante;
window.addEventListener("load", () => {
    // VARIÁVEIS GLOBAIS
    divDesfocante = document.querySelector(".desfoque-do-fundo");
   
    
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
    })

    // Abrir Atalhos
    const botaoAbrirAtalhos = document.querySelector(".abrir-atalhos-do-teclado");
    botaoAbrirAtalhos.addEventListener("click", () => menu.abrirAtalhosDoTeclado());

    const botaoFecharAtalhos = document.querySelector(".fechar-atalhos-do-teclado");
    botaoFecharAtalhos.addEventListener("click", () => menu.fecharAtalhosDoTeclado());
})



