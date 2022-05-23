
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
        const readonlyCelsDarker = document.getElementById("readonly-cels-darker");

        readonlyCelsDarker.addEventListener("change", () => {
            for (const col of colunasdosInputs) {
                readonlyCelsDarker.checked
                ? col.classList.add("readonly")
                : col.classList.remove("readonly");
            }
        })
    },

    // MENU MOBILE
    abrirMenuMobile: () => {

        const menuHamburguer = document.querySelector(".hamburguer");
        const listadeDefinicoes = document.querySelector("header ul");
        const main = document.querySelector("main");

        menuHamburguer.addEventListener("click", () => {
            listadeDefinicoes.classList.toggle("visible");
        })

        main.addEventListener("click", () => {
            listadeDefinicoes.classList.remove("visible");
        })
    }
    
});



window.addEventListener("load", () => {
    customizarFicha.marcarDefinicoes();
    customizarFicha.denegrirReadonlyCels();

    customizarFicha.abrirMenuMobile();
})



