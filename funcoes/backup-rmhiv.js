 
const backup = {

    saveAndReturnGridData() {
        const celulas = document.querySelectorAll(".grade input");

        for (let i = 0; i < celulas.length; i++) {
            celulas[i].addEventListener("input", () => localStorage.setItem(`trmhiv-c${i}`, `${celulas[i].value}`));
            celulas[i].value = localStorage.getItem(`trmhiv-c${i}`);
        }
    },

    saveAndReturnAdicionalData() {
        const dadosAdicionais = document.querySelectorAll(".ficha header input, .linha-de-assinatura input");

        for (let i = 0; i < dadosAdicionais.length; i++) {
            dadosAdicionais[i].addEventListener("input", () => localStorage.setItem(`trmhiv-${dadosAdicionais[i].id}`, `${dadosAdicionais[i].value}`));

            dadosAdicionais[i].value = localStorage.getItem(`trmhiv-${dadosAdicionais[i].id}`);
        }

    }
}


window.addEventListener("load", () => {
    backup.saveAndReturnGridData();
    backup.saveAndReturnAdicionalData();
})