
const customizarFicha = new Object({

    marcarDefinicoes: () => {
        const checkBoxes = document.querySelectorAll("header .atalho");
    
        for (const box of checkBoxes) {
            box.addEventListener("change", () => {
                box.checked 
                ? box.parentElement.classList.add("activo") 
                : box.parentElement.classList.remove("activo");
            })
        }
    }, 

    denegrirReadonlyCels: () => {
        const colunasdosInputs = document.getElementsByClassName("col-de-inputs");
        const atalhodeBg = document.getElementById("atalho-de-bg");

        atalhodeBg.addEventListener("change", () => {
            for (const col of colunasdosInputs) {
                atalhodeBg.checked
                ? col.classList.add("readonly")
                : col.classList.remove("readonly");
            }
        })
    }
    
});



window.addEventListener("load", () => {
    customizarFicha.marcarDefinicoes();
    customizarFicha.denegrirReadonlyCels();
})



