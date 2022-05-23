
const customizarFicha = new Object({

    DenegrirReadonlyCelsDarker: () => {

        readonlyCelsDarker.addEventListener("change", () => {
            readonlyCelsDarker.checked 
            ? readonlyCelsDarker.parentElement.classList.add("activo") 
            : readonlyCelsDarker.parentElement.classList.remove("activo");
        })
    }, 

    denegrirReadonlyCels: () => {
        const colunasdosInputs = document.getElementsByClassName("col-de-inputs");

        readonlyCelsDarker.addEventListener("change", () => {
            for (const col of colunasdosInputs) {
                readonlyCelsDarker.checked
                ? col.classList.add("readonly")
                : col.classList.remove("readonly");
            }
        })
    },

    readonlyCelsObs: () => {
        // Declaracao das Variáveis necessárias
        let observacao = document.querySelector("p.readonlycels-obs"),
            trechodeObs = document.querySelector("p.readonlycels-obs span");
            tempodeObs = 1200;
    
        // Mostrar Obseervação
        observacao.classList.add("on");
    
        // Recomendar "Dark readonly Cels"
        if(!readonlyCelsDarker.checked) {
            trechodeObs.classList.add("show");
            tempodeObs = 3500;
        }
        else {
            trechodeObs.classList.remove("show");
        }
      
        setTimeout(() => {
            observacao.classList.remove("on");
        }, tempodeObs);
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


let readonlyCelsDarker;
window.addEventListener("load", () => {
    readonlyCelsDarker = document.getElementById("readonly-cels-darker");

    customizarFicha.DenegrirReadonlyCelsDarker();
    customizarFicha.denegrirReadonlyCels();
    customizarFicha.abrirMenuMobile();

    /**  Readonly els*/
    let readonlyCels = document.querySelectorAll(".col-de-inputs input[readonly]");
    for (const cel of readonlyCels) {
        cel.addEventListener("click", customizarFicha.readonlyCelsObs); 
    } 
})



