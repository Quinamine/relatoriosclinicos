
const saveOnStorage = {

    salvarFicha: () => {
        const celulas = document.querySelectorAll(".coluna-de-inputs input");
        for (let i = 0; i < celulas.length; i++) {  
            celulas[i].addEventListener("input", () =>  localStorage.setItem(`trmce-cel${i}`, celulas[i].value));
            celulas[i].value = localStorage.getItem(`trmce-cel${i}`);
        }
    },

    salvarDadosAdicionais: () => {
        const dadosAdicionais = document.querySelectorAll(".contentor-da-ficha input[type=text], input[type=date]");
        dadosAdicionais.forEach ( dado => {
            dado.addEventListener("input", () => localStorage.setItem(`trmce-${dado.id}`, `${dado.value}`));
            dado.value = localStorage.getItem(`trmce-${dado.id}`);
        })
    },

    salvarReadonlyCelsBg: () => {
        const checkboxDarker = document.querySelector("#denegrir-readonlycels");

        checkboxDarker.addEventListener("change", () => {
            localStorage.setItem("darkmode", checkboxDarker.checked);
        });

        if(localStorage.getItem("darkmode") == "true") {
            checkboxDarker.setAttribute("checked", "");
        }
        else {
            checkboxDarker.removeAttribute("checked");
        }
    }
}

window.addEventListener("load", () => {
    saveOnStorage.salvarFicha();
    saveOnStorage.salvarDadosAdicionais();
});