
const armazenamento = {

    salvarERetornarFicha: () => {      
        const celulas = document.querySelectorAll(".coluna-de-inputs input");

        for (let i = 0; i < celulas.length; i++) {  
            celulas[i].addEventListener("input", () =>  localStorage.setItem(`trmce-cel${i}`, celulas[i].value));
            celulas[i].value = localStorage.getItem(`trmce-cel${i}`);
        }
    },

    salvarERetornarDadosAdicionais: () => {
        const dadosAdicionais = document.querySelectorAll(".contentor-da-ficha input[type=text], input[type=date]");

        dadosAdicionais.forEach ( dado => {
            dado.addEventListener("input", () => localStorage.setItem(`trmce-${dado.id}`, `${dado.value}`));
            dado.value = localStorage.getItem(`trmce-${dado.id}`);
        })
    },

    salvarERetornarDestaqueDeInputsReadonly: () => {
        const readonlyInputsDarker = document.querySelector("#readonlyinputs-darker");
    
        readonlyInputsDarker.addEventListener("change", () => {
            if(readonlyInputsDarker.checked) {
                localStorage.setItem("destaque", "on");
            }
            else {
                localStorage.removeItem("destaque");
            }
        })
        
        if(localStorage.getItem("destaque")){
            readonlyInputsDarker.setAttribute("checked", "");
        }
        else {
            readonlyInputsDarker.removeAttribute("checked");
        }     
        menu.destacarReadonlyInputs();
    }
}

window.addEventListener("load", () => {
    armazenamento.salvarERetornarFicha();
    armazenamento.salvarERetornarDadosAdicionais();
    armazenamento.salvarERetornarDestaqueDeInputsReadonly();
});