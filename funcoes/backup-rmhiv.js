 
const backup = {

    saveGridData() {
        const celulas = document.querySelectorAll(".grade input");

        for (let i = 0; i < celulas.length; i++) {
            celulas[i].addEventListener("input", () => localStorage.setItem(`trmhiv-c${i}`, `${celulas[i].value}`));
            celulas[i].value = localStorage.getItem(`trmhiv-c${i}`);
        }
    },

    saveAditionalData() {
        const dadosAdicionais = document.querySelectorAll(".ficha header input, .linha-de-assinatura input");

        for (let i = 0; i < extraInputs.length; i++) {
            extraInputs[i].addEventListener("input", () => localStorage.setItem(`trmhiv-${extraInputs[i].id}`, `${extraInputs[i].value}`));

            extraInputs[i].value = localStorage.getItem(`trmhiv-${extraInputs[i].id}`);
        }

    }
}


window.addEventListener("load", () => {
    backup.saveGridData();
    backup.saveAditionalData();
})